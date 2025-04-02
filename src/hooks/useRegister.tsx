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
  const [isEmpty, setIsEmpty] = useState(true);

  const handleRegister = useCallback(async () => {
    setError("");
    setLoading(true);
    try {
      const corporationId = await RegisterService(credentials);
      console.log(corporationId);

      setLocalStorage("auth", corporationId[0]);

      navigate("/login");
    } catch (error) {
      setError(ERROR_LOGIN);
    } finally {
      setLoading(false);
    }
  }, [credentials, navigate]);

  useEffect(() => {
    const allFieldsFilled = Object.values(credentials).every(
      (value) => value.trim() !== ""
    );
    setIsEmpty(!allFieldsFilled);
    console.log(credentials);
    
  }, [credentials]);

  return {
    loading,
    error,
    setCredentials,
    handleRegister,
    isEmpty,
    credentials
  };
};
