// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat'; // Importa o AngularFireModule
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa o AngularFireAuthModule
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa o AngularFirestoreModule
import { environment } from '../environments/environment'; // Importa as configurações do Firebase

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa o Firebase com a configuração do environment
    AngularFireAuthModule, // Importa o módulo de autenticação
    AngularFirestoreModule, // Importa o módulo do Firestore
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
