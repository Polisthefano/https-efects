import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { usuario } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlBase: string = "https://reqres.in/api/"
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<usuario[]> {
    return this.http.get(`${this.urlBase}users?page=2`).pipe(map((user: any) => (user.data)))
  }
}
