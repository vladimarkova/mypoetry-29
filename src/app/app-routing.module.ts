import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FlipBookComponent } from './core/flip-book/flip-book.component';
import { HeaderComponent } from './core/header/header.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/poetry-book'
  },
  {
    path: 'poetry-book',
    component: FlipBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
