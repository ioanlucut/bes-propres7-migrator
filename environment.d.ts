declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CANDIDATES_DIR: string;
      VERIFIED_DIR: string;
      GDRIVE_ROOT_FOLDER_ID: string;
      CONNECT_TO_G_DRIVE: string;

      // Injected from GH Secrets
      GDRIVE_BES_CLIENT_ID: string;
      GDRIVE_BES_CLIENT_SECRET: string;
      GDRIVE_BES_CLIENT_REFRESH_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
