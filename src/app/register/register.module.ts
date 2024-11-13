// src/app/register/register.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

// Importando Firestore aqui
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa o AngularFirestoreModule
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa o AngularFireAuthModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    AngularFireAuthModule, // Certifique-se de que este está importado
    AngularFirestoreModule, // Certifique-se de que este está importado
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
