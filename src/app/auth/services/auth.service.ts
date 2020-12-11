import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { Session } from '../../shared/models/session';
import { map } from 'rxjs/operators';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public TOKEN_KEY = 'grello-token';

  private readonly session = new BehaviorSubject<Session | null>(null);

  public readonly user = this.session.pipe(
    map(s => s?.user || null)
  );

  constructor(
    private readonly api: ApiService,
  ) {
    this.init();
  }

  async init() {
    const token = localStorage.getItem(this.TOKEN_KEY)
    // const session = this.api.getSession(token) as Session;
    // this.session.next(session);
  }

  async login(login: string, password: string) {
    // const session = await this.api.postSession(login, password).toPromise();
    const session = {
      user: {
        id: 123123,
      } as User,
      token: 'asdsad',
      timestamp: new Date()
    } as Session;

    if (session) {
      this.session.next(session);
      localStorage.setItem(this.TOKEN_KEY, session.token);
    }
    return session.user;
  }

  async logout() {
    this.session.next(null);
  }


}
