import { useState } from "react";

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
    companyName: "",
    password: "",
  });
  const [activeRemember, setActiveRemember] = useState<boolean>(false);
  const isEmpty = !credentials.password || !credentials.companyName;
  const initStates = () => {
    setLoading(false);
    setError("");
  };
  const handleLogin = async () => {
    try {
      initStates();
      const corporationId = await loginInService(credentials);
      setLocalStorage("auth", corporationId);
      if (activeRemember) setLocalStorage("credentials", credentials);
      navigate("/");
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
    setActiveRemember,
  };
};
