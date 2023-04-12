import {
  LOWERCASE_PATTERN,
  NUMBER_PATTERN,
  PASSWORD_LENGTH,
  SPECIAL_CHARACTERS_PATTERN,
  UPPERCASE_PATTERN,
} from "./validations";

export const PASSWORD_STRENGTH_VALUES = [
  {
    label: "Weak",
    color: "error",
  },
  {
    label: "Average",
    color: "info",
  },
  {
    label: "Strong",
    color: "warning",
  },
  {
    label: "Excellent",
    color: "success",
  },
];

export function getPasswordStrength(password: string): number {
  const validations = [
    password.length > PASSWORD_LENGTH,
    UPPERCASE_PATTERN.test(password),
    LOWERCASE_PATTERN.test(password),
    NUMBER_PATTERN.test(password),
    SPECIAL_CHARACTERS_PATTERN.test(password),
  ];

  const complexity = validations.reduce(
    (acc, curr) => (curr ? acc + 1 : acc),
    -1
  );

  return complexity;
}
