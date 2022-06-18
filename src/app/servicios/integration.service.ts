import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  url:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

    public listaPersonas():Observable<any> {
    return this.http.get<Person[]>(this.url + '/person/find/1');/**/
  }
}
