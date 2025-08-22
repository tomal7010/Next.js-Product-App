"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    if (res?.ok) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/products"); 
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: "Invalid email or password",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Card */}
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white shadow-lg w-full">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white cursor-pointer hover:bg-violet-700"
              >
                Login
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don`t have an account yet?
              <a
                rel="noopener noreferrer"
                href="/register"
                className="hover:underline text-violet-600 ml-1"
              >
                Register
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
