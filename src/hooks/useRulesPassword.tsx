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

  const updateRule = useCallback((code: string, check: boolean) => {
    setRules((prevRules) =>
      prevRules.map((rule) =>
        rule.code === code ? { ...rule, isPassed: check } : rule
      )
    );
  }, []);

  const validateRules = useCallback(() => {
    updateRule("length", password.length > LENGTH_PASSWORD_RULE);
    updateRule("alphanumeric", /[a-zA-Z]/.test(password) && /[0-9]/.test(password));
    updateRule("symbol", /[!@#$%^&*(),.?":{}|<>]/.test(password));

    setPassed(rules.every((rule) => rule.isPassed));
  }, [password, rules, updateRule]);

  const validatePasswordMatch = useCallback(() => {
    if (confirmPassword !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }, [confirmPassword, password]);

  useEffect(() => {
    validateRules();
  }, [password, validateRules]);

  useEffect(() => {
    validatePasswordMatch();
  }, [confirmPassword, validatePasswordMatch]);

  return {
    rules,
    passed,
    error,
    setPassword,
    setConfirmPassword,
  };
};