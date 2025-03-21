import { useEffect, useState, useCallback } from "react";
import { IUser } from "../interfaces/User.interface";
import { RegisterService } from "../services/Register";
import { setLocalStorage } from "../utils/functions/localStorage";
import { useNavigate } from "react-router-dom";
import { ERROR_LOGIN } from "../common/Error";

export const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<IUser>({
    companyName: "",
    password: "",
  });
  const [activeRemember, setActiveRemember] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleRegister = useCallback(async () => {
    setError("");
    setLoading(true);
    try {
      const corporationId = await RegisterService(credentials);
      setLocalStorage("auth", corporationId);

      if (activeRemember) {
        setLocalStorage("credentials", credentials);
      }
      navigate("/");
    } catch (error) {
      console.error("Error durante el registro:", error);
      setError(ERROR_LOGIN);
    } finally {
      setLoading(false);
    }
  }, [credentials, activeRemember, navigate]);

  useEffect(() => {
    const allFieldsFilled = Object.values(credentials).every(
      (value) => value.trim() !== ""
    );
    setIsEmpty(!allFieldsFilled);
  }, [credentials]);

  return {
    loading,
    error,
    setCredentials,
    handleRegister,
    setActiveRemember,
    isEmpty,
  };
};
