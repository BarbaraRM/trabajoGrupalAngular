import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./navbar/navigation.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [RouterOutlet, RouterModule, NavigationComponent],
})
export class AppComponent {}
