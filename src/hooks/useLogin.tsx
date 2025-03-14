import { useState } from "react";

import { IUser } from "../interfaces/User.interface";

export const useLogin = () => {
  const [credentials, setCredentials] = useState<IUser>({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const requestBodyLogin: IUser = {
      username: credentials.username,
      password: credentials.password,
    };
  };

  return {
    setCredentials,
    handleLogin,
  };
};
