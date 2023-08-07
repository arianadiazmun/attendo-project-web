"use client"
import NavBar from "../components/NavBar";
//add logo on top of login and maybe slight gradient blue bg
import { Button } from "@nextui-org/react";

export default function LoginForm() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-sky-400 w-full h-screen mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <br />
          <h1 className=" p-4 pb-0 md:pb-16 lg:pb-30 text-center text-3xl font-bold text-sky-500 sm:text-3xl">
            Welcome Back!
          </h1>

          <div className="pb-10 mx-auto mt-2 max-w-md text-center flex flex-row justify-center   text-gray-500 ">
          <img src="../../attendoTwo.svg"  className="w-1/2 h-[200px]   "></img>
          </div>
          <form
            action=""
            className=" space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white bg-opacity-40 "
          >
            <p className=" text-sky-500 text-center text-lg font-medium">
              Sign in to admin
            </p>

            <div>
              <label for="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <Button
           className="block w-full rounded-lg bg-sky-600 px-5 py-3 text-sm font-medium text-white"
              type="submit"
              as="a"
              href="../admin/events"
            >
                Sign in
            </Button>

            {/* <p className="text-center text-sm text-gray-500">
        No account?
        <a className="underline" href="">Sign up</a>
      </p> */}
          </form>
        </div>
      </div>
    </>
  );
}
