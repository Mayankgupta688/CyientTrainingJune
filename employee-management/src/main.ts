import "zone.js/dist/zone";
import { ApplicationModule } from "./app.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(ApplicationModule)