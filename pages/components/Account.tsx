import React, { createContext, FunctionComponent, ReactNode } from "react";
import { useState, useEffect } from "react";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useRouter } from 'next/router'
interface AccountProps {
 children: ReactNode
setUiState: Function
}

const AccountContext = createContext<any>(null);
const Account: FunctionComponent<AccountProps> = (props) => {

    const router = useRouter();
    const getSession = async () => {
        return await new Promise((resolve, reject) =>{
            const user = UserPool.getCurrentUser();
            if(user){
                user.getSession(async (err: any, session: any) => {
                    if(err){
                        reject();
                    } else {
                        const attributes: Object = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if(err){
                                    reject(err);
                                }else {
                                    const results: any = {};
                                    for (let attribute of attributes!){
                                        const {Name, Value} = attribute;
                                        results[Name] = Value;
                                    }
                                    resolve(results);
                                }
                            })
                        })
                        resolve({user, ...session, ...attributes});
                    }
                })
            } else {
                reject();
            }
        })
    };
  const userForgotPassword = async (Username:string) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });
      user!.forgotPassword({
        onSuccess: (data: any) => {
          console.log("onsuccess", data);
          resolve(data);
          router.reload();
        },
        onFailure: (err: Error) =>  {
          console.error("onfailure", err);
          reject(err)
        },
        inputVerificationCode: ((data: any) => {
          console.warn("input code details: ", data);
          // Print the message onto the screen to show them the status of this
          
        })
      });
    });
  };

 const authenticate = async (Username:string, Password:string) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onsuccess", data);
          resolve(data);
          router.reload();
        },
        onFailure: (err) => {
          console.error("onsuccess", err);
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data)
        },
      });
    });
  };
const signUpUser = async (Username:string, Password:string) => {
    return await new Promise((resolve, reject) => {
      UserPool.signUp(Username, Password, [], null!, (err, data) => {
        if (err) {
          alert(err.message);
          reject(err)
        } else {
          resolve(data);
          console.log(data);
        }

      });
    });
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if(user){
        user.signOut()
        router.reload();
    }
    
  }

  return <AccountContext.Provider value={{ authenticate, getSession, userForgotPassword,logout, signUpUser }}>
    {props.children}
  </AccountContext.Provider>;
};

export { Account, AccountContext};
