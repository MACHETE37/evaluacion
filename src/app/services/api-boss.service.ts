import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BossResponse } from '../shared/BossResponse';

@Injectable({
  providedIn: 'root'
})

export class ApiBossService {

  loading = signal<boolean>(false);
  loadingHttpDialog = signal<boolean>(false);


  WebApiUrl = "https://localhost:7293/api";

  constructor(private http: HttpClient) {

    }

  PostClientes(parametros:any):Observable<BossResponse> {
   return this.http.post<BossResponse>(this.WebApiUrl + "/Clientes",parametros)
  
  }  

  PostPaises(parametros:any):Observable<BossResponse> {
    return this.http.post<BossResponse>(this.WebApiUrl + "/Paises",parametros)
   
   }  
}