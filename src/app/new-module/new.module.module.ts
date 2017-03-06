import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewComponent} from "./new.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NewComponent]
})
export class NewModuleModule { }
