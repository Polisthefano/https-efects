import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CargarUsuarios, CARGAR_USUARIOS } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: usuario[] | null = null
  loading: boolean = false
  constructor(private usuarioService: UsuarioService, private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.usuarioService.getUsers().subscribe(resp => {
    //   this.usuarios = resp
    // })
    this.store.dispatch(new CargarUsuarios())//delay para probar spinner
    this.store.select("usuarios").subscribe(usuarios => {
      this.usuarios = usuarios.users
      this.loading = usuarios.loading
      if (usuarios.error) {
        Swal.fire({
          title: usuarios.error.status,
          text: usuarios.error.msg,
          icon: 'error',
        })
      }
    })
  }

}
