"use client";

// error boundary must be client component

import React, { useEffect } from "react";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = ({ error, reset }) => {
  // console log error for debugging
  useEffect(() => {
    console.error("Unexpected error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-700 mb-6">
        একটি সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন।
      </p>

      <div className="flex gap-4">
        <button
          className="btn btn-primary"
          onClick={() => reset()} // try to re-render
        >
          Retry
        </button>

        <Link href="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
