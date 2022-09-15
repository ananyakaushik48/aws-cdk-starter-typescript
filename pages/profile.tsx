import { NextPage } from 'next'
import {useState, useEffect} from 'react'
import { user, User } from '../types/Model'
import { Account } from './components/Account'
import Login from './components/Login'
import Settings from './components/Settings'
import SignUp from './components/SignUp'
import Status from './components/Status'



const AuthPage: NextPage = () => {
    const [uiState, setUiState] = useState<any>(null);
    const [user, setUser] = useState<user>(null);

    return (
      <Account setUiState={setUiState}>
        <Status setUiState={setUiState}/>
        
        {uiState === "signIn" && (
        <>
          <Login setUiState={setUiState} />
        </>
        )}{uiState === "signUp" && (
        <>
          <SignUp setUiState={setUiState}/>
        </>
        )}
        
        {/* <Settings/> */}
      </Account>
    )
  }
  
  export default AuthPage