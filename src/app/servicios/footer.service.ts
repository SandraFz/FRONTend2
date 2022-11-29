import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  url:string = environment.baseUrl;
  idPers:number = 1;

  constructor(private http:HttpClient) { }

  public socMedList():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url+'/soc_media/list/'+this.idPers);
  }

  public addContact(sM:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.url+'/soc_media/list/'+this.idPers, sM);
  }

  public deleteContact(idSM:number){
    return this.http.delete<Contact>(this.url+'/soc_media/delete/'+this.idPers+`/${idSM}`);
  }

  public getContact(idSM:number):Observable<Contact>{
    return this.http.get<Contact>(this.url+`/soc_media/find/${idSM}`);
  }

  public updateSM(idSM:number, socMed:Contact){
    return this.http.put<Contact>(this.url+`/soc_media/edit/${idSM}`, socMed);
  }
}
