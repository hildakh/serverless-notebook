const dev = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_KEY,
  s3: {
    REGION: "us-east-2",
    BUCKET: process.env.REACT_APP_DEV_BUCKET
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: process.env.REACT_APP_DEV_URL
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: process.env.REACT_APP_DEV_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_DEV_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_DEV_IDENTITY_POOL_ID
  }
};

const prod = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_KEY,
  s3: {
    REGION: "us-east-2",
    BUCKET: process.env.REACT_APP_PROD_BUCKET
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: process.env.REACT_APP_PROD_URL
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: process.env.REACT_APP_PROD_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_PROD_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_PROD_IDENTITY_POOL_ID
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  social: {
    FB: process.env.REACT_APP_FACEBOOK_APP_ID
  },
  ...config
};

