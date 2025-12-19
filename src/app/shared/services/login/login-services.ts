import { Injectable } from '@angular/core';
import { ServiceNames } from '../service-names';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {

  //variable para mostrar la url de forma dinamica
  private url: string = ''

  constructor(private http: HttpClient) {

  }


  /**
   * 
   * @param email: direccion del correo del usuario
   * @param password :contrasenia del usuario
   * @returns devuelve el codigo de uelta del servicio
   */
  login(email: string, password: string): Observable<any> {

    //cabeceras del servicio login
    const headers = new HttpHeaders({
      'name': 'User-Agent',
      'value': 'insomnia/8.4.1'
    })

    //montamos la url del sevcio completo junto con los parametros de entrada
    this.url = ServiceNames.LOGIN_SERVICE + '?email=' + email + '&password=' + password;

    return this.http.get(this.url, { headers })

  }








}
