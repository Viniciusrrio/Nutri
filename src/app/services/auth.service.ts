import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'; // Funções modulares do Firebase Auth
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; // Funções modulares do Firestore
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null); // Comportamento do usuário
  user$ = this.userSubject.asObservable(); // Observável para monitorar o estado do usuário

  private firestore = getFirestore(); // Inicializa o Firestore

  constructor(private router: Router) {
    this.initializeAuthListener(); // Inicializa o listener de autenticação ao iniciar o serviço
  }

  // Inicializa o ouvinte de mudanças no estado de autenticação
  private initializeAuthListener() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        // Se o usuário estiver autenticado, buscar seus dados no Firestore
        this.loadUserData(user);
      } else {
        // Se o usuário não estiver autenticado, limpa os dados
        this.userSubject.next(null);
      }
    });
  }

  // Função de login
  async login(email: string, password: string): Promise<void> {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        // Busca os dados do usuário no Firestore
        this.loadUserData(user);
      }
    } catch (error) {
      console.error('Erro ao fazer login no Firebase', error);
      throw error;
    }
  }

  // Função de cadastro
  async register(nome: string, email: string, password: string, idade: number, peso: number, altura: number, genero: string) {
    const auth = getAuth();
    try {
      // Cria o usuário com email e senha usando Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Usando Firestore V9+ com funções modulares
      const user = userCredential.user;

      // Cria uma referência para o documento do usuário no Firestore
      const userRef = doc(this.firestore, 'users', user.uid); 
      
      // Salva os dados do usuário no Firestore
      await setDoc(userRef, {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        altura: altura,
        genero: genero,
        uid: user.uid,
      });

      // Atualiza o BehaviorSubject com os dados do usuário após o registro
      this.loadUserData(user);

      return userCredential;
    } catch (error) {
      console.error('Erro ao registrar usuário', error);
      throw error;
    }
  }

  // Função para carregar os dados do usuário no Firestore
  private async loadUserData(user: User) {
    const userDoc = doc(this.firestore, 'users', user.uid);
    const userData = await getDoc(userDoc);
    
    if (userData.exists()) {
      this.userSubject.next(userData.data()); // Atualiza o BehaviorSubject com os dados do usuário
    } else {
      console.log('Documento do usuário não encontrado no Firestore.');
    }
  }

  // Função de logout
  async logout() {
    const auth = getAuth();
    await signOut(auth); // Efetua o logout
    this.userSubject.next(null); // Limpa os dados do usuário
    this.router.navigate(['/login']); // Redireciona para a página de login
  }

  
}
