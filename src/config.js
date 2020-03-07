const dev = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_KEY,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app2-api-dev-attachmentsbucket-1u4ej5rfwaq7g"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9zy3xjvy32.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_eB1cnd5gk",
    APP_CLIENT_ID: "4s29ge9s9h1u5ntccrlfokovve",
    IDENTITY_POOL_ID: "us-east-2:d736566c-0793-4c84-846a-8b9c1c4db2b4"
  }
};

const prod = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_KEY,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app2-api-prod-attachmentsbucket-ajh9yzga4y8j"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ctqvcdbadh.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_zwqjaqwwp",
    APP_CLIENT_ID: "7v30ek7b1mn3au2v5rlpa3tb5d",
    IDENTITY_POOL_ID: "us-east-2:5d3f1cbe-c611-495a-9d0c-1419eccded5e"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  social: {
    FB:  process.env.REACT_APP_FACEBOOK_APP_ID
  },
  ...config
};

