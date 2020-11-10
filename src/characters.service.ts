import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Character } from "./app/models/character.model";
import { Info } from "./app/models/info.model";

@Injectable()
export class CharactersService {
  url = "https://rickandmortyapi.com/api/character/";
  constructor(private _http: HttpClient) {}
  getCharacters(info: Info, page: number): Observable<Character[]> {
    return this._http.get<Character[]>(`${this.url}?page=${page}`).pipe(
      map((data: any) => {
        info.count = data.info.count;
        info.pages = data.info.pages;
        return data.results as Character[];
      })
    );
  }
}
