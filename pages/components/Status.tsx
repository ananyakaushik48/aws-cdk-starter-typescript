import { useRouter } from "next/router";
import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { user } from "../../types/Model";
import { AccountContext } from "./Account";

interface StatusProps{
 setUiState: Function

}
const Status: FunctionComponent<StatusProps> = ({setUiState}) => {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState<user>(null);
  const { getSession, logout }:any = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session: any) => {
      if(session.user){
        try {
          setStatus(true);
          setUser(session.user);
          setUiState("signedIn");
        } catch (error) {
          setUiState("signIn");
          setUser(null);
        }
      } else {
        setUiState('signIn')
      }
    });
  }, []);

  return (
    <div>
      {status ? <button onClick={logout}>Logout</button> : <button onClick={() => setUiState("signIn")}>Please sign in </button>}
      <button onClick={() => setUiState('settingsPage')}> Settings </button>
      
    </div>
  );
};
export default Status;
