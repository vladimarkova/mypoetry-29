import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FlipBookComponent } from './flip-book/flip-book.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FlipBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FlipBookComponent,
  ]
})
export class CoreModule { }
