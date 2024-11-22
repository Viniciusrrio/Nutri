import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nome: string = '';
  email: string = '';
  password: string = '';
  idade: number | undefined;
  peso: number | undefined;
  altura: number | undefined;
  genero: string = '';

  constructor(
    private router: Router,
  ) {}


  async register() {
    try {
      
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);

      
      const firestore = getFirestore(); 
      const userRef = doc(firestore, 'users', userCredential.user.uid); 

     
      await setDoc(userRef, {
        nome: this.nome,
        email: this.email,
        idade: this.idade,
        peso: this.peso,
        altura: this.altura,
        genero: this.genero,
        uid: userCredential.user.uid 
      });

      
      this.router.navigate(['/login']);
    } catch (error) {
      console.error("Erro ao criar conta ou salvar dados no Firestore", error);
    }
  }
}
