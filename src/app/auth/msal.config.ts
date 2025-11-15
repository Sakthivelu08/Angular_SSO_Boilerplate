import { BrowserCacheLocation, LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "e2a32780-387c-411c-a42a-51f2fc94d17b",
    authority: "https://login.microsoftonline.com/4364f74a-6fec-4021-aa47-71ab911adf97",
    redirectUri: "http://localhost:4200"
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => {
        console.log("MSAL:", message);
      },
      logLevel: LogLevel.Verbose
    }
  }
};

export const loginRequest = {
  scopes: ["user.read"]
};
