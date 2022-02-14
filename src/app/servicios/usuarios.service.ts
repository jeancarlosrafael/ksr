import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getUsers(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(environment.usuarios+'/users')
  }
}
