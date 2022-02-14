import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  imagenes: any[];
  loading: boolean;
  usuarios: Usuario[];
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly imageService: ImagenService,
  ) {
    this.imagenes = [];
    this.loading = true;
    this.usuarios = [];
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usuarioService.getUsers().subscribe((usuarios:Usuario[])=>{
      const longitud = usuarios.length-1;
      this.usuarios = usuarios;
      const nuevosUsuarios = usuarios.map((usuario, index)=>{
        this.getImage(usuario.website, index, longitud);
        return {
          name: usuario.name,
          username: usuario.username,
          email: usuario.email,
          address:{
            city: usuario.address.city
          },
          website: usuario.website,
          company: {
            name: usuario.company.name
          }
        }
      })
      console.log("nuevosUsuarios",nuevosUsuarios)
    })
  }

  getImage(website: string, index: number, longitud: number):void {

    this.imageService.getImage(website).subscribe(
      data=>{
        this.imagenes.push(data);
        if(index == longitud){
          this.loading = false;
        }
      },
      (error)=>{
        this.imagenes.push(error.url);
        this.usuarios[index].img = error.url;
        if(index == longitud){
          this.loading = false;
        }
        console.log("error",error)
      }
    )
  }
}
