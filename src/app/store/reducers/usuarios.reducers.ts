import { Action } from "@ngrx/store";
import { usuario } from "src/app/models/usuario.model";
import * as fromUsuarios from "../actions" //importamos todo de usuarios actions
export interface UsuariosState { //state de usuarios interface
  users: usuario[];
  loaded: boolean;
  loading: boolean;
  error: any | null;
}
const initState: UsuariosState = { //estado inicial
  users: [],
  loaded: false,
  loading: false,
  error: null
}
export function usuariosReducer(state = initState, action: Action): UsuariosState {
  const actionFIX = action as fromUsuarios.usuariosAcciones //siempre necesario para el error de actions incompatible en el appreducers
  switch (actionFIX.type) {
    case fromUsuarios.CARGAR_USUARIOS:
      return {
        users: state.users,
        loaded: state.loaded,
        loading: true, //solo cambiariamos este campo, los demas igual
        error: state.error
      }
    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state, //esto es lo mismo que arriba que hacerlo como arriba
        loaded: true,
        loading: false,
        users: [...actionFIX.usuarios]
      }
    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        users: [],
        error: {
          status: actionFIX.error.status,
          msg: actionFIX.error.status == 404 ? 'URL no encontrada' : actionFIX.error.message
        }
      }
    default:
      return state
  }
}
