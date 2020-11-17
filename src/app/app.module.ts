import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CharactersService } from "../characters.service";
import { HttpClientModule } from "@angular/common/http";
import { PaginationComponent } from "./pagination/pagination.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { RoutesModule } from "./routes/routes.module";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutesModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PaginationComponent,
    CharacterListComponent
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
