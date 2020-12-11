import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../../shared/models/issue';
import { Session } from '../../shared/models/session';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getIssues(boardId: number) {
    return this.http.get<Issue[]>(`/api/boards/${boardId}/issues`)
  }

  postSession(login: string, password: string) {
    return this.http.post<Session>(`/api/sessions`, {
      login,
      password
    });
  }

  // TODO: Logout and so on

}
