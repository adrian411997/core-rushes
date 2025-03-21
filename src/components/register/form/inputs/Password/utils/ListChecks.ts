export interface IRulesCheck {
  code: string;
  rule: string;
  isPassed: boolean;
}

export const ListCheck: IRulesCheck[] = [
  { code: "length", rule: "Must have a length of 6 or above", isPassed: false },
  { code: "alphanumeric", rule: "Must be alphanumeric", isPassed: false },
  { code: "symbol", rule: "Must have symbols", isPassed: false },
];
