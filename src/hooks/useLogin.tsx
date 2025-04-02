import { useState } from "react";

import { IUser } from "../interfaces/User.interface";
import { loginInService } from "../services/Login";
import { setLocalStorage } from "../utils/functions/localStorage";
import { ERROR_LOGIN } from "../common/Error";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [credentials, setCredentials] = useState<IUser>({
    companyName: "",
    password: "",
  });
  const isEmpty = !credentials.password || !credentials.companyName;
  const initStates = () => {
    setLoading(false);
    setError("");
  };
  const handleLogin = async () => {
    try {
      initStates();
      const corporationId = await loginInService(credentials);
      setLocalStorage("token", corporationId);
    } catch {
      setError(ERROR_LOGIN);
    } finally {
      setLoading(false);
    }
  };

  return {
    setCredentials,
    handleLogin,
    loading,
    error,
    isEmpty,
  };
};
