import { Component } from '@angular/core';
import { ServiceapiService } from 'src/app/services/serviceapi.service';
import { Empleo } from 'src/app/models/empleo.model';
import { Empresa } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css']
})
export class EmpleosComponent {
  searchTerm: string = '';
  Empleos: Array<Empleo> = [];
  Empresa: Array<Empresa> = [];
  CardEmpleos: Array<any> = [];
    constructor(
      private serviceapi : ServiceapiService
    ) { }
  
    ngOnInit(): void {
      this.serviceapi.getAnuncios().subscribe(
        (data) => {
          if(data.type == "success") {
            this.Empleos = data.data;
            for(let i = 0; i < this.Empleos.length; i++){
              if(this.Empleos[i].fecha_fin_anuncio.substring(0, 10) > new Date().toISOString().substring(0, 10)){
                // actualiza el estado del anuncio
                this.serviceapi.updateEstadoAnuncio(this.Empleos[i].id_anuncio, 0,this.Empleos[i] ).subscribe(
                  (data) => {
                    if(data.type == "success") {
                      console.log("Actualizado");
                    }
                  }
                );
              }
                
              if(this.Empleos[i].estado_anuncio == '1'){
                this.serviceapi.getEmpresa(this.Empleos[i].id_empresa).subscribe(
                  (dataEmpresa) => {
                    if(dataEmpresa.type == "success") {
                      this.Empresa[0] = dataEmpresa.data;
                      console.log(this.Empresa);
                      this.CardEmpleos.push({
                        id_anuncio: this.Empleos[i].id_anuncio,
                        nombre_anuncio: this.Empleos[i].nombre_anuncio,
                        // de 2023-03-01T05:00:00.000Z a 2023-03-01
                        fecha_fin_anuncio: this.Empleos[i].fecha_fin_anuncio.substring(0, 10),
                        remuneracion_anuncio: this.Empleos[i].remuneracion_anuncio,
                        nombre_empresa: this.Empresa[0].nombre_empresa,
                        img_empresa: this.Empresa[0].img_empresa,
                        verificacion_empresa: this.Empresa[0].verificacion_empresa,
                        formacion_anuncio: this.Empleos[i].formacion_anuncio,
                        direccion_anuncio: this.Empleos[i].direccion_anuncio,
                      });
                      console.log(this.CardEmpleos);
                    }
                  }
                );
              }
              else{
                console.log("No hay empleos");
              }
            }
          }
        }
      );
    }

}
