import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleo } from 'src/app/models/empleo.model';
import { Empresa } from 'src/app/models/empresa.model';
import { ServiceapiService } from 'src/app/services/serviceapi.service';

@Component({
  selector: 'app-detalleempleos',
  templateUrl: './detalleempleos.component.html',
  styleUrls: ['./detalleempleos.component.css']
})
export class DetalleempleosComponent {
  idAnuncio : any;
  Empleo: Empleo = {} as Empleo;
  Empresa: Empresa = {} as Empresa;
  constructor(
    private router: Router, private route: ActivatedRoute,
    private serviceapi : ServiceapiService
    ) {
    this.idAnuncio = this.route.snapshot.paramMap.get('id_anuncio');
  }

  ngOnInit(): void {
    this.serviceapi.getAnuncio(this.idAnuncio).subscribe(
      (data) => {
        if(data.type == "success") {
          this.Empleo = data.data;
          console.log(this.Empleo);
          this.serviceapi.getEmpresa(this.Empleo.id_empresa).subscribe(
            (dataEmpresa) => {
              if(dataEmpresa.type == "success") {
                this.Empresa = dataEmpresa.data;
                console.log(this.Empresa);
              }
            }
          );
        }
      }
    );
  }
}
