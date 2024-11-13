import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  // Importando Firestore

import { environment } from 'src/environments/environment';  // Ambiente do Firebase

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializando o Firebase
    AngularFireAuthModule,  // Importando o módulo de autenticação
    AngularFirestoreModule,  // Importando o módulo do Firestore
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
