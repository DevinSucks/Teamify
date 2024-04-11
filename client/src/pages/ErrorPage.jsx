import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-800 flex items-center justify-center text-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-700 text-lg mb-8">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <button button  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-opacity-75" onClick={() => navigate("/login")}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;