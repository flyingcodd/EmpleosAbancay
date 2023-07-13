import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  constructor(
    private httpClient : HttpClient
  ) { }
  //comentario
  API = 'https://apiempleos.aynidev.com/api/';

  getEmpresas(): Observable <Data> {
    return this.httpClient.get<Data>(this.API + 'empresas');
  }
  getEmpresa(id: number): Observable <Data> {
    return this.httpClient.get<Data>(this.API + 'empresas/' + id);
  }
  getAnuncios(): Observable <Data> {
    return this.httpClient.get<Data>(this.API + 'anuncios');
  }
  getAnuncio(id: number): Observable <Data> {
    return this.httpClient.get<Data>(this.API + 'anuncios/' + id);
  }
  updateEstadoAnuncio(id: number, estado: number, Empleo: any): Observable <Data> {
    Empleo.estado_anuncio = estado;
    return this.httpClient.put<Data>(this.API + 'anuncios/' + id, Empleo);
  }

}
