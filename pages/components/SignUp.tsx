import React, { FunctionComponent, useContext } from "react";
import { useState, useEffect } from "react";
import { AccountContext } from "./Account";
import UserPool from "./UserPool";

interface SignUpProps {
  signOut?: any;
  user?: any;
  setUiState: Function;
}

const SignUp: FunctionComponent<SignUpProps> = ({setUiState}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpUser } = useContext(AccountContext);
  const onSubmit = (event: any) => {
    event.preventDefault();
    signUpUser(email, password);
  };

  return (
    <div className="w-full h-screen  bg-white ">
      <div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit}>
                <h2 className="text-center uppercase bold" style={{'fontSize': '30px'}}>Sign Up</h2>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full bg-slate-100 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue focus:outline-none focus:ring-blue sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full bg-slate-100 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue focus:outline-none focus:ring-blue sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Terms And Conditions
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue hover:text-blue"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm text-black font-light">
          Have an account?
          <span
            onClick={() => setUiState("signIn")}
            role="button"
            className="cursor-pointer text-blue"
          >
            {` `}Sign In
          </span>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
