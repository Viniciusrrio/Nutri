import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Importações para o Firestore v9
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importações de autenticação

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

  // Função de cadastro
  async register() {
    try {
      // Criação do usuário no Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);

      // Obtenção do Firestore e criação do documento do usuário
      const firestore = getFirestore(); // Obter instância do Firestore
      const userRef = doc(firestore, 'users', userCredential.user.uid); // Usando UID para o documento

      // Salvando dados no Firestore
      await setDoc(userRef, {
        nome: this.nome,
        email: this.email,
        idade: this.idade,
        peso: this.peso,
        altura: this.altura,
        genero: this.genero,
        uid: userCredential.user.uid // Armazena o UID do Firebase Authentication
      });

      // Redirecionando para a página de login após o cadastro
      this.router.navigate(['/login']);
    } catch (error) {
      console.error("Erro ao criar conta ou salvar dados no Firestore", error);
    }
  }
}
