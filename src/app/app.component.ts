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
  characters: Character[];
  info = new Info(1, 0);
  pages: number;
  loading: boolean;
  constructor(private characterService: CharactersService) {
    this.loadCharacters(1);
  }
  loadCharacters(page: number) {
    this.loading = true;
    this.characterService.getCharacters(this.info, page).subscribe(
      res => {
        this.characters = res;
        this.pages = this.info.pages;
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }
}
