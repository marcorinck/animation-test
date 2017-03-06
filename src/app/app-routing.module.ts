import { NgModule } from '@angular/core';

import {Routes, RouterModule} from "@angular/router";
import {NewComponent} from "./new-module/new.component";

const routes: Routes = [
  {path: "newcomponent", component: NewComponent},
  {path: '', redirectTo: "newcomponent", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
