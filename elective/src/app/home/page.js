import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 flex items-center px-6">
        <img
          src="" // Image
          className="h-8 w-auto mr-4" // Adjust size
        />
        <span className="text-3xl font-bold text-white">PEAKPULSE</span>
      </div>

      <div className="flex w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg z-10 mt-16">
        <div className="w-full">
          <h2 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-white">
            SIGN IN
          </h2>

          <div className="mt-8 w-full">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-4 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="UserName:"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-2 px-4 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Not a member?{" "}
              <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                Start the free 14-day trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
