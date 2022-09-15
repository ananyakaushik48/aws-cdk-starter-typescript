import { NextPage } from 'next'
import {useState, useEffect} from 'react'
import { user, User } from '../types/Model'
import { Account } from './components/Account'
import Login from './components/Login'
import Settings from './components/Settings'
import SignUp from './components/SignUp'
import Status from './components/Status'
import VerifyEmail from './components/VerifyEmail'



const AuthPage: NextPage = () => {
    const [uiState, setUiState] = useState<any>(null);
    const [user, setUser] = useState<user>(null);

    return (
      <Account setUiState={setUiState} setUser={setUser}>
        <Status setUiState={setUiState}/>
        
        {uiState === "signIn" && (
        <>
          <Login setUiState={setUiState} />
        </>
        )}{uiState === "signUp" && (
        <>
          <SignUp setUiState={setUiState} setUser={setUser} />
        </>
        )}{uiState === "verifyEmail" && (
        <>
          <VerifyEmail setUiState={setUiState} userData={user}/>
        </>
        )}{uiState === "changePassword" && (
        <>
          <VerifyEmail setUiState={setUiState} userData={user}/>
        </>
        )}{uiState === "settingsPage" && (
        <>
        <Settings/>
      <button onClick={()=> setUiState('signedIn')}>Cancel</button>
        </>
        )}
        
      </Account>
    )
  }
  
  export default AuthPage