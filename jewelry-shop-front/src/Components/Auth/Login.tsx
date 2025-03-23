import React from "react";

function Login() {
  return (
    <div className="w-full p-6 flex justify-center items-center min-h-screen">
      <div className=" bg-Gray shadow p-12 rounded-2xl flex flex-col items-center max-md:w-full">
        <h1 className="text-3xl font-medium leading-11 text-black">Login</h1>
        <form action="" className="flex flex-col items-start max-md:w-full">
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            className="mt-10 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
            className="mt-6 py-3 w-[500px] max-md:w-full border-b border-gray-400 focus:outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[27px]"
          />
          <div className="flex items-center mt-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-Dark_gray">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 py-3 w-[500px] max-md:w-full bg-black text-white rounded-md"
          >
            SIGN IN
          </button>
          <div className=" w-full mt-6 text-center">
            <a href="/forgot-password" className="text-sm text-black">
              Have you forgotten your password?
            </a>
          </div>
          <div className="w-full mt-4 text-center">
            <p className="text-sm text-black">
              Don't have an account?{" "}
              <a href="/registration" className="text-Accent">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
