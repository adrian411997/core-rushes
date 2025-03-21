import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/functions/localStorage";

export const useAccess = () => {
  const navigate = useNavigate();
  const id = getLocalStorage("auth");
  console.log(id);

  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, []);
};
