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
  // Retrieve user authentication state from Redux
  const { user } = useSelector((state) => state.auth);
  // Get current location using useLocation hook
  const location = useLocation();

  // Render different layout based on user authentication state
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar component */}
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">
        {/* Navbar component */}
        <Navbar />

        {/* Outlet for rendering nested routes */}
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    // Redirect to login page if user is not authenticated
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}

export default function App() {
  // State for controlling theme mode
  const [themeMode, setThemeMode] = useState("light");
  // Function to switch to light theme
  const lightTheme = () => {
    setThemeMode("light");
  };
  // Function to switch to dark theme
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
