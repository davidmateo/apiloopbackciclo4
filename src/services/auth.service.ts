import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {config} from '../config/config';
import {Usuario} from '../models';
const jwt = require('jsonwebtoken');
import {UsuarioRepository} from '../repositories';
import {repository} from '@loopback/repository';
// Nuevas librerias
const generator = require("password-generator");
const cryptoJS = require("crypto-js");
@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(@repository(UsuarioRepository)
  public usuarioRepository: UsuarioRepository) {}
   //Generacion de claves
   GenerarClave() {
    let clave = generator(8, false);
    return clave;
  }

  CifrarClave(clave: String) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }
//JWT
//generamos un token
  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre + " " + usuario.apellido
      }
    }, config.claveJWT)

    return token
  }
  //validamos el token
  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, config.claveJWT);
      return datos;
    } catch (error) {
      return false;
    }
  }
  //Autenticacion
  IdentificarPersona(correo: string, password: string) {
    try {
      let p = this.usuarioRepository.findOne({where: {correo: correo, password: password}})
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }



  /*
   * Add service methods here
   */
}
