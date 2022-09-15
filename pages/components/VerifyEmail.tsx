import { CognitoUser } from "amazon-cognito-identity-js";
import React, { FunctionComponent, useContext } from "react";
import { useState, useEffect } from "react";
import { AccountContext } from "./Account";
import UserPool from "./UserPool";

interface VerifyEmailProps {
  signOut?: any;
  user?: any;
  setUiState: Function;
  userData: any;
}

const VerifyEmail: FunctionComponent<VerifyEmailProps> = ({setUiState,userData, userPass}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, getCognitoUser } = useContext(AccountContext);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
        const userinfo = await getCognitoUser(userData);
        console.log(userinfo.username.username)
        
    } catch (error:any) {
        alert(error.message)
    }
    setUiState('verifyEmail')
  };

  return (
    <div className="w-full h-screen  bg-white ">
      <div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit}>
                <h2 className="text-center uppercase bold" style={{'fontSize': '30px'}}>Verify Email</h2>  
                Please click on the verifcation link in your email              
              <div>
                <button
                  type="submit"
                  onClick={() => setUiState('signIn')}
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
