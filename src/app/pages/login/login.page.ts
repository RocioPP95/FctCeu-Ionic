import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginServices } from 'src/app/shared/services/login/login-services';
import { TranslateConfig } from 'src/app/shared/services/translate-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email = ''
  pwd = ''

  constructor(private translateConfigService: TranslateConfig, private translate: TranslateService,
    private loginService: LoginServices
  ) {
    this.translateConfigService.getDefaultLanguage();
    // Para modificar o setear manualmente el lenguaje del componente o pagina 
    // this.translateConfigService.setLanguage('es');
  }

  title: string = "FCT - CONTROL DE REGISTRO"

  ngOnInit() {
  }

  getLogin() {

    this.loginService.login(this.email, this.pwd).subscribe(data => {
      alert("exito")
      console.log(data)
    },
      error => {
        alert("error")
        console.log(error)
      })
  }

}
