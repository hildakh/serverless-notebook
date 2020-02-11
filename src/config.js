
export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  // identityPoolRegion: 'us-east-2',
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-hilda"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: " https://qb7hs36mda.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_LlssBgBau",
    APP_CLIENT_ID: "3nanr14bsg1g98vd7dgg5u65hq",
    IDENTITY_POOL_ID: "us-east-2:ca8bcdf7-b021-4d11-b552-3c843b3f857c"
  }
};