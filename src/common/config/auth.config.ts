import 'dotenv/config';

export const authConfig = {
  secret: process.env.AUTHCONFIG_SECRET,
  expiresIn: process.env.AUTHCONFIG_EXPIRES_IN,
};
