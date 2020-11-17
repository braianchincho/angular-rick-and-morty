import { Component, OnInit } from "@angular/core";
import { CharactersService } from "../../characters.service";
import { Character } from "../models/character.model";
import { Info } from "../models/info.model";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  info = new Info(1, 0);
  pages: number;
  loading: boolean;
  constructor(private characterService: CharactersService) {}
  ngOnInit() {
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
