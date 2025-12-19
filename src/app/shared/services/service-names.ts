import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceNames {


  public static readonly LOGIN_SERVICE: string = `${environment.apiUrl}/login`;

}
