import { useEffect, useState } from "react";

import { IUser } from "../interfaces/User.interface";
import { loginInService } from "../services/Login";
import { setLocalStorage } from "../utils/functions/localStorage";
import { useNavigate } from "react-router-dom";
import { ERROR_LOGIN } from "../common/Error";
export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [credentials, setCredentials] = useState<IUser>({
    username: "",
    password: "",
  });

  const isEmpty = !credentials.password || !credentials.username
  const initStates = () => {
    setLoading(false);
    setError("");
  };
  const handleLogin = async () => {
    const requestBodyLogin: IUser = {
      username: credentials.username,
      password: credentials.password,
    };
    try {
      initStates();
      const corporationId = await loginInService(requestBodyLogin);
      setLocalStorage("auth", corporationId);
      navigate("/");
    } catch {
      setError(ERROR_LOGIN);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(credentials);
  }, [credentials]);
  return {
    setCredentials,
    handleLogin,
    loading,
    error,
    isEmpty
  };
};
