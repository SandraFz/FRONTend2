import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Skill } from './model/Skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url:string = environment.baseUrl;
  idPers:number = 1;

  constructor(private http:HttpClient) { }

  public skillList():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+'/skill/list/'+this.idPers);
  }

  public addSkill(sk:Skill):Observable<Skill>{
    return this.http.post<Skill>(this.url+'/skill/new/'+this.idPers, sk);
  }

  public deleteSkill(idSk:number){
    return this.http.delete<Skill>(this.url+'/skill/delete/'+this.idPers+`/${idSk}`);
  }

  public getSkill(idSk:number):Observable<Skill>{
    return this.http.get<Skill>(this.url+`/skill/find/${idSk}`)
  }

  public updateSkill(idSk:number, sk:Skill){
    return this.http.put<Skill>(this.url+`/skill/edit/${idSk}`, sk)
  }
}
