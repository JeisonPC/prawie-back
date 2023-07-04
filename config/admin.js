const crypto = require("crypto");

module.exports = ({ env }) => {
  const generateRandomToken = () => {
    return crypto.randomBytes(16).toString("hex");
  };

  return {
    auth: {
      secret: env("ADMIN_JWT_SECRET") || generateRandomToken(),
    },
    apiToken: {
      salt: env("API_TOKEN_SALT") || generateRandomToken(),
    },
    transfer: {
      token: {
        salt: env("TRANSFER_TOKEN_SALT") || generateRandomToken(),
      },
    },
  };
};
