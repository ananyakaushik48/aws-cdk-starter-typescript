import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Account } from './components/Account'
import Status from './components/Status'
import Settings from './components/Settings'

const Home: NextPage = () => {
  return (
    <div className="test">test</div>
    // <Account>
    //   <Status/>
    //   <SignUp/>
    //   <Login/>
    //   <Settings/>
    // </Account>
  )
}

export default Home
