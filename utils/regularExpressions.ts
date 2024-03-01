export const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z\\d])[\\S]{8,}$";
export const passwordRegex = new RegExp(passwordPattern);
