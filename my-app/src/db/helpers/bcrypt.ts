import { compareSync, hashSync } from "bcryptjs";


const hashPass = (originalPass: string): string => {
  return hashSync(originalPass, 10);
};

const comparePass = (originalPass: string, hashedPass: string): boolean => {
  return compareSync(originalPass, hashedPass);
};

export {
  hashPass,
  comparePass,
};
