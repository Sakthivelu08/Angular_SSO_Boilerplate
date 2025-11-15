import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

import { MSALInstanceFactory } from "./app/auth/msal.factories";

(async () => {
  const msalInstance = MSALInstanceFactory();
  await msalInstance.initialize();

  // Patch initialized instance into providers
  (appConfig as any).providers.push({
    provide: "MSAL_INIT",
    useValue: msalInstance
  });

  bootstrapApplication(AppComponent, appConfig);
})();
