import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
// import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TaskDetails from "./pages/Taskdetails";
import Tasks from "./pages/Tasks";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from './contexts/theme'
import DarkMode from "./components/DarkMode";
// import { setOpenSidebar } from "./redux/slices/authSlice";
function Layout() {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* <MobileSidebar /> */}

      <div className="flex-1 overflow-y-auto">
        <Navbar />

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}

export default function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <DarkMode className="hidden"/>
    <main className="w-full min-h-screen bg-[#f3f4f6] dark:text-white dark:bg-slate-800 ">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route index path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </main>
    </ThemeProvider>
  );
}
