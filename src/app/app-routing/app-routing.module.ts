import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { router } from "./router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
