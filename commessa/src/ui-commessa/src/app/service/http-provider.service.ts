import { Injectable } from '@angular/core';
import { CommessaApiService } from './commessa-api.service';
import { Observable } from 'rxjs';

// variable url for connect to back-end
var apiUrl = "http://localhost:8080/commessa";

var utenteApiUrl = "https://api.mockaroo.com/api/3a2ce830?count=100&key=a2f1b650";
var OrganizzazioneApiUrl ="https://api.mockaroo.com/api/af8a2c20?count=100&key=a2f1b650";
var riferimentoApiUrl ="https://api.mockaroo.com/api/cce147d0?count=100&key=a2f1b650";


@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private commessaApiService: CommessaApiService) { }


  // GET Utente by id
  public getUtente() : Observable<any> {
    return this.commessaApiService.get(utenteApiUrl);
  }

  // GET Organizzazione by id
  public getOrganizzazione() : Observable<any> {
    return this.commessaApiService.get(OrganizzazioneApiUrl);
  }

  // GET Riferimento by id
  public getRiferimento() : Observable<any> {
    return this.commessaApiService.get(riferimentoApiUrl);
  }
  
  // GET 
  public getAllCommessa() : Observable<any>  {
    return this.commessaApiService.get(apiUrl);
  }

  // POST
  public postCommessa(model : any) : Observable<any> {
    return this.commessaApiService.post(apiUrl, model);
  }

    // PUT
    public putCommessa(commessaId: number, model : any) : Observable<any> {
      return this.commessaApiService.put(apiUrl, commessaId, model);
    }

   // DELETE
   public deleteCommessaById(commessaId: number): Observable<any> {
    return this.commessaApiService.delete(apiUrl, commessaId);
  }

  //GET BY ID
  public getCommessaById(commessaId: number) : Observable<any> {
    return this.commessaApiService.getById(apiUrl, commessaId);
  }





}
