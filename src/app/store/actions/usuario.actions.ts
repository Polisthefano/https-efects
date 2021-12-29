import { Action } from "@ngrx/store"
import { usuario } from "src/app/models/usuario.model"

export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios' //definimos action
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios FAIL'
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios SUCCESS'
export class CargarUsuarios implements Action { //definimos la clase que vamos a usar para implementar la action
  readonly type = CARGAR_USUARIOS
}
export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL
  constructor(public error: any) { }
}
export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS
  constructor(public usuarios: usuario[]) { }
}
export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess //tipo de acciones permitidas
