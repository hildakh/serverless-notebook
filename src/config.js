const env = require('dotenv');
env.config();
export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: env.REGION,
    BUCKET: env.BUCKET
  },
  apiGateway: {
    REGION: env.REGION,
    URL: env.URL
  },
  cognito: {
    REGION: env.REGION,
    USER_POOL_ID: env.USER_POOL_ID,
    APP_CLIENT_ID: env.APP_CLIENT_ID,
    IDENTITY_POOL_ID: env.IDENTITY_POOL_ID
  }
};