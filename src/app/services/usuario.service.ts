import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { usuario } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlBase: string = "https://reqres.in/api/"
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<usuario[]> {
    return this.http.get(`${this.urlBase}users?page=2&delay=10`).pipe(map((user: any) => (user.data))
      // , catchError(err => { throw (err) }) //esa es forma de mapear el error antes de suscribirse entonces envias el error que quieras personalizado
    )
  }
}
