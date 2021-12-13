declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APIKEY: string;
      AUTH_DOMAIN: string;
      PROJECT_ID: string;
      STORAGE_BUCKET: string;
      MESSAGING_SENDER_ID: string;
      APP_ID: string;
      DOC_ID: string;
      DB_PATH: string;
    }
  }
}
