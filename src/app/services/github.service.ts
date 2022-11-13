import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUserModel } from '../shared/models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserByName(name: string): Observable<GithubUserModel> {
    return this.http.get<GithubUserModel>(`${this.apiUrl}/users/${name}`);
  }
}
