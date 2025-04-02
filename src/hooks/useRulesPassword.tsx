import { useEffect, useState } from "react";
import {
  IRulesCheck,
  ListCheck,
} from "../components/register/form/inputs/Password/utils/ListChecks";
import { LENGTH_PASSWORD_RULE } from "../common/Constant";

export const useRulesPassword = (password:string) => {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPasswordPass, setIsConfirmPasswordPass] =
    useState<boolean>(false);
  const [rules, setRules] = useState<IRulesCheck[]>(ListCheck);
  const [passed, setPassed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const isEnoughLength = (password: string) => {
    return password.length > LENGTH_PASSWORD_RULE;
  };

  const isAlphanumeric = (password: string) => {
    return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
  };

  const hasSymbols = (password: string) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
  };

  const ruleValidators: Record<string, (password: string) => boolean> = {
    length: (password) => isEnoughLength(password),
    alphanumeric: (password) => isAlphanumeric(password),
    symbol: (password) => hasSymbols(password),
  };

  useEffect(() => {
    const updateRules = ListCheck.map((rule) => ({
      ...rule,
      isPassed: ruleValidators[rule.code]?.(password) ?? false,
    }));
    setRules(updateRules);

    const allPassed = updateRules.every((rule) => rule.isPassed);
    setPassed(allPassed);
  }, [password]);

  useEffect(() => {
    if (confirmPassword.length > 0) {
      const isMatch = confirmPassword === password;
      setIsConfirmPasswordPass(isMatch);
      setError(isMatch ? "" : "Passwords do not match");
  
      console.log("¿Las contraseñas coinciden?", isMatch);
    }
  }, [confirmPassword, password]);
  
  return {
    rules,
    passed,
    error,
    setConfirmPassword,
    password,
    isConfirmPasswordPass,
  };
};
