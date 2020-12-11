import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'grello-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private readonly validatePassword = (control: AbstractControl) => control.value.length >= 8 ? null : ['Too short password']

  public readonly loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('', [this.validatePassword]),
  });

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  public clear() {
    this.loginForm.setValue({
      login: '',
      password: '',
    })
  }

  public async login() {
    const { login, password } = this.loginForm.value;
    const user = await this.auth.login(login, password);
    if (user) {
      this.router.navigateByUrl('/issues');
    }
  }

}
