// Source: https://www.w3resource.com/javascript/form/email-validation.php
export const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const UPPERCASE_PATTERN = /(?=.*[A-Z])/;

export const LOWERCASE_PATTERN = /(?=.*[a-z])/;

export const NUMBER_PATTERN = /(?=.*[0-9])/;

export const SPECIAL_CHARACTERS_PATTERN =
  /(?=.*[\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/;

export const PASSWORD_REGEXP = new RegExp(
  UPPERCASE_PATTERN.source +
    LOWERCASE_PATTERN.source +
    NUMBER_PATTERN.source +
    SPECIAL_CHARACTERS_PATTERN.source
);

export const PASSWORD_LENGTH = 6;
