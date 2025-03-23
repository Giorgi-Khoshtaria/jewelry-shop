import React from "react";

function ForgotPassword() {
  return (
    <div className="w-full p-6 flex justify-center items-center min-h-screen">
      <div className="bg-Gray shadow p-12 rounded-2xl flex flex-col items-center max-md:w-full">
        <h1 className="text-3xl font-medium leading-11 text-black">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Enter your email address, and we'll send you a link to reset your
          password.
        </p>
        <form action="" className="flex flex-col items-start max-md:w-full">
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <button
            type="submit"
            className="mt-6 py-3 w-[500px] max-md:w-full bg-black text-white rounded-md"
          >
            Send Reset Link
          </button>
          <div className="w-full mt-6 text-center">
            <a href="/login" className="text-sm text-Accent">
              ← Back to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
