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
/*
  public getPerson(id:number):Observable<Person>{
    return this.http.get<Person>(`${this.url}/person/find/${id}`);
  }
  */

  public getPerson():Observable<any> {
    return this.http.get<Person>(this.url + '/person/find/1');
  }
/*
  public getPersonById(id:number){
    return this.http.get(this.url+'/person/find/id'); 
  }

  public updatePerson(id: number, person: Person){
    
   return this.http.put(this.url+'/person/edit/${id}', person);
  }*/

  

}
