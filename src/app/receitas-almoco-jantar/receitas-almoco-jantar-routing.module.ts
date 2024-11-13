import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasAlmocoJantarPage } from './receitas-almoco-jantar.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitasAlmocoJantarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasAlmocoJantarPageRoutingModule {}
