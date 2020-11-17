import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CharacterListComponent } from "../character-list/character-list.component";
const routes: Routes = [
  { path: "**", redirectTo: "characters" },
  { path: "characters", component: CharacterListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}
