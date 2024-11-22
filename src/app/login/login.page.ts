import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login() {
    try {
      const userCredential = await this.authService.login(this.email, this.password);
      console.log('Usuário autenticado', userCredential);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }
  
}
