const bcrypt = require('bcryptjs');

const hashPass = (originalPass: string): string => {
  return bcrypt.hashSync(originalPass, 10);
};

const comparePass = (originalPass: string, hashedPass: string): boolean => {
  return bcrypt.compareSync(originalPass, hashedPass);
};

export {
  hashPass,
  comparePass,
};
