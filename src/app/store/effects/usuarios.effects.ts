import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions"
@Injectable() //es como un servicio de angular
export class UsuariosEffects {
  constructor(private actions$: Actions, public usuariosService: UsuarioService) { //el signo pesos significa que es un observable

  }
  //@Effect({ dispatch: false }) //no dispara otra accion
  @Effect()
  cargarUsuarios$ = this.actions$.pipe(ofType(usuariosActions.CARGAR_USUARIOS)).pipe(switchMap(resp => {
    console.log(resp);
    return this.usuariosService.getUsers().pipe(map(users => {
      return new usuariosActions.CargarUsuariosSuccess(users)
    }), catchError((err) => {
      console.log(err);
      return of(new usuariosActions.CargarUsuariosFail(err))
      //catch error pide retornar un observable sirve para poder captura el error antes de suscribirse
    }));
  })) //cuando se llame la accion cargarusuarios esto dispara otra
  //switchMap recibe un observable y dispara otro nuevo sin importar el anterior
}
