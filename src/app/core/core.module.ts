import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './header/header.component';
import { FlipBookComponent } from './flip-book/flip-book.component';

const primeImports = [ButtonModule];

@NgModule({
  declarations: [
    HeaderComponent,
    FlipBookComponent
  ],
  imports: [
    CommonModule,
    ...primeImports,
  ],
  exports: [
    HeaderComponent,
    FlipBookComponent,
  ]
})
export class CoreModule { }
