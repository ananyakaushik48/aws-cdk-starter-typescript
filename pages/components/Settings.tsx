import React, { useContext, useEffect, useState} from 'react';
import { AccountContext } from './Account';
import ChangePassword from './ChangePassword';

const Settings = () => {
    const { getSession } = useContext(AccountContext);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        getSession().then(() => {
            setLoggedIn(true);
        })
    }, [])

    return (
        <div className="">
            {loggedIn && (
                <>
                <h2>Settings</h2>
                <ChangePassword/>
                </>
            )}
        </div>
    )
}

export default Settings