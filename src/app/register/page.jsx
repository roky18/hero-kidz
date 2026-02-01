"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 text-center rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-5xl font-bold mb-4">Register</h1>
        <form className="flex items-center flex-col gap-4">
          <input type="text" placeholder="Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="btn btn-primary w-10/12">Register</button>
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
          Already have an account?
          <Link href="/login" className="text-blue-600 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
