import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Study } from '../model/Study';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  url:string = environment.baseUrl;
  idPers = 1;
  constructor(private http:HttpClient) { }

  public studiesList():Observable<Study[]>{
    return this.http.get<Study[]>(this.url+'/studies/list/'+this.idPers);
  }

  public addStudy(stu:Study):Observable<Study>{
    return this.http.post<Study>(this.url+'/studies/new/'+this.idPers, stu);
  }

  public deleteStudy(idStu:number){
    return this.http.delete<Study>(this.url+'/skill/delete/'+this.idPers+`${idStu}`);
  }

  public getStudy(idStu:number):Observable<Study>{
    return this.http.get<Study>(this.url+`/studies/find/${idStu}`)
  }

  public updateStudy(idStu:number, stu:Study){
    return this.http.put<Study>(this.url+`/studies/edit/${idStu}`, stu)
  }
}
