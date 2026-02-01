"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white text-center p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">Login</h1>

        <form className="flex flex-col items-center gap-4">
          <input type="email" placeholder="Email" className="input w-10/12" />
          <input
            type="password"
            placeholder="Password"
            className="input w-10/12"
          />
          <button type="submit" className="btn btn-primary w-10/12 mt-2">
            Login
          </button>
          {/* Google Login */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="btn btn-outline w-10/12 mt-4 flex items-center justify-center gap-2"
          >
            {" "}
            <FaGoogle></FaGoogle>
            Login with Google
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Do not have an account?
          <Link href="/register" className="text-blue-600 ml-2 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
