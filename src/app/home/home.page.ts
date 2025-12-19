import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfig } from '../shared/services/translate-config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private translateConfigService: TranslateConfig, private translate: TranslateService
 ) {
  this.translateConfigService.getDefaultLanguage();
  // Para modificar o setear manualmente el lenguaje del componente o pagina 
  // this.translateConfigService.setLanguage('es');
 }

}
