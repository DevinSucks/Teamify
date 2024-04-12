import React from 'react';
import { Link, useNavigate } from "react-router-dom";

// Importing React's Link component for navigation within the app
// Importing useNavigate hook from react-router-dom for programmatic navigation

const ErrorPage = () => {
    const navigate = useNavigate(); // Initializing the useNavigate hook

  return (
    <div className="h-screen bg-gray-800 flex items-center justify-center text-center">
      {/* Container for the error page */}
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Content of the error page */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        {/* Heading indicating the error code */}
        <p className="text-gray-700 text-lg mb-8">
          Sorry, we couldn't find the page you were looking for.
        </p>
        {/* Message indicating that the requested page was not found */}
        <button button className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-opacity-75" onClick={() => navigate("/login")}>
          {/* Button to navigate back to the homepage */}
          Back to Homepage
        </button>
        {/* Button to navigate back to the homepage */}
      </div>
    </div>
  );
};

export default ErrorPage;
