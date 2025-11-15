import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RedirectHandlerComponent } from "./auth/redirect-handler.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RedirectHandlerComponent],
  templateUrl: "./app.component.html"
})
export class AppComponent {}
