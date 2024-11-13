import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { ReceitasService } from '../receitas.service';

@Component({
  selector: 'app-receitas-almoco-jantar',
  templateUrl: './receitas-almoco-jantar.page.html',
  styleUrls: ['./receitas-almoco-jantar.page.scss'],
})
export class ReceitasAlmocoJantarPage implements OnInit {
  user: any = {}; // Dados do usuário
  searchQuery: string = '';
  foodData: any;
  receitas: any[] = [];
  constructor(private router: Router,private receitasService: ReceitasService) {}

  ngOnInit() {
    this.loadUserData();
    this.receitasService.getReceitas().subscribe(data => {
      this.receitas = data.results; // Armazenando as receitas retornadas
    });
  }

  async loadUserData() {
    try {
      const auth = getAuth();
      const user = auth.currentUser; // Pega o usuário logado
      console.log('UID do usuário logado:', user?.uid); // Log do UID do usuário

      if (user) {
        const firestore = getFirestore();
        const userRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          this.user = userDoc.data(); // Define os dados do usuário
          console.log('Dados do usuário encontrados:', this.user);
        } else {
          console.log('Não foi encontrado dados do usuário no Firestore');
        }
      } else {
        console.log('Nenhum usuário logado');
      }
    } catch (error) {
      console.error('Erro ao carregar os dados do usuário', error);
    }
  }
}
