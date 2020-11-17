import { Component, VERSION } from "@angular/core";
import { CharactersService } from "../characters.service";
import { Character } from "./models/character.model";
import { Info } from "./models/info.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
