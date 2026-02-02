"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postUser } from "@/actions/server/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await postUser({
      name,
      email,
      password,
    });

    if (!result) {
      alert("User already exists or invalid data");
      return;
    }

    // ✅ success
    alert("Registration successful! Please login.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 text-center rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">Register</h1>

        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="input w-10/12"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input w-10/12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input w-10/12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary w-10/12">
            Register
          </button>

          {/* Google Register */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="btn btn-outline w-10/12 mt-2 flex items-center justify-center gap-2"
          >
            <FaGoogle />
            Register with Google
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?
          <Link href="/login" className="text-blue-600 ml-2 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
