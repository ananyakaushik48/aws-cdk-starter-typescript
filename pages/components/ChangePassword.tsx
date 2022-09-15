import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession, changeCurrentUserPassword } = useContext(AccountContext);

  const onSubmit = (event: any) => {
    event.preventDefault();
    changeCurrentUserPassword(password,newPassword);
  };

  return (
    <div className="">
      <form
        className="flex flex-col justify-center max-w-6xl"
        onSubmit={onSubmit}
      >
        <label htmlFor="password">Current Password</label>
        <input
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="email">New Password</label>
        <input
          value={newPassword}
          type="text"
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
