import { useEffect, useState, useCallback } from "react";
import {
  IRulesCheck,
  ListCheck,
} from "../components/register/form/inputs/Password/utils/ListChecks";
import { LENGTH_PASSWORD_RULE } from "../common/Constant";

export const useRulesPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [rules, setRules] = useState<IRulesCheck[]>(ListCheck);
  const [passed, setPassed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const updatedRules = ListCheck.map((rule) => {
      if (rule.code === "length") {
        return { ...rule, isPassed: password.length > LENGTH_PASSWORD_RULE };
      }
      if (rule.code === "alphanumeric") {
        return { ...rule, isPassed: /[a-zA-Z]/.test(password) && /[0-9]/.test(password) };
      }
      if (rule.code === "symbol") {
        return { ...rule, isPassed: /[!@#$%^&*(),.?":{}|<>]/.test(password) };
      }
      return rule;
    });

    setRules(updatedRules);

    const allPassed = updatedRules.every((rule) => rule.isPassed);
    setPassed(allPassed);
  }, [password]); 

  useEffect(() => {
    if (confirmPassword !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }, [confirmPassword, password]);

  return {
    rules,
    passed,
    error,
    setPassword,
    setConfirmPassword,
  };
};