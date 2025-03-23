import React from "react";

function Registration() {
  return (
    <div className="w-full p-6 flex justify-center items-center min-h-screen">
      <div className="bg-Gray shadow p-12 rounded-2xl flex flex-col items-center max-md:w-full">
        <h1 className="text-3xl font-medium leading-11 text-black">Register</h1>
        <form action="" className="flex flex-col items-start max-md:w-full">
          <input
            type="text"
            id="username"
            required
            placeholder="Username"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <input
            type="tel"
            id="phone"
            required
            placeholder="Phone"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <input
            type="password"
            id="repeat-password"
            required
            placeholder="Repeat Password"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <button
            type="submit"
            className="mt-6 py-3 w-[500px] max-md:w-full bg-black text-white rounded-md"
          >
            REGISTER
          </button>
          <div className="w-full mt-6 text-center">
            <a href="/login" className="text-sm text-black">
              Already have an account?{" "}
              <span className="text-Accent">Login</span>
            </a>
          </div>
          <div className="w-full mt-4 text-center">
            <a href="/" className="text-sm text-black">
              ← Go Back
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
