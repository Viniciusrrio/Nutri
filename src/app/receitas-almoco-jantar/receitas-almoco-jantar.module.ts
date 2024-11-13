import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitasAlmocoJantarPageRoutingModule } from './receitas-almoco-jantar-routing.module';

import { ReceitasAlmocoJantarPage } from './receitas-almoco-jantar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasAlmocoJantarPageRoutingModule
  ],
  declarations: [ReceitasAlmocoJantarPage]
})
export class ReceitasAlmocoJantarPageModule {}
