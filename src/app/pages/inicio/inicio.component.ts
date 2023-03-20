import { Component } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { ServiceapiService } from 'src/app/services/serviceapi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  Empresas: Array<Empresa> = [];
  
    constructor(
      private serviceapi : ServiceapiService
    ) { }
  
    ngOnInit(): void {
      this.serviceapi.getEmpresas().subscribe(
        (data) => {
          if(data.type == "success") {
            this.Empresas = data.data;
            console.log(data.message);
          }
        }
      );
    }
}
