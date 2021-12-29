
import { ActionReducerMap } from "@ngrx/store";
import * as fromReducers from "./reducers"; //gracias al archivo index podemos hacerlos
export interface AppState { //nuestro appState que contiene el estado del store
  usuarios: fromReducers.UsuariosState
}
export const appReducers: ActionReducerMap<AppState> = {
  usuarios: fromReducers.usuariosReducer
} //combinacion de reducers global
