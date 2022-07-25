import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience';
import { ImgExperience } from '../model/ImgExperience'

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url:string = environment.baseUrl;
  idPers:number = 1;

  constructor(private http:HttpClient) {}

  //CRUD Experience

  public experienceList():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url+"/exp/list/"+this.idPers);
  }

  public addExperience(exp:Experience):Observable<Experience>{
    return this.http.post<Experience>(this.url+"/exp/new/"+this.idPers, exp)
  }

  public deleteExperience(idExp:number){
    return this.http.delete<Experience>
    (this.url+"/exp/delete/"+this.idPers+`/${idExp}`)
  }

  public getExperience(id:number):Observable<Experience>{
    return this.http.get<Experience>(this.url+`/exp/find/${id}`)
  }

  public updateExperience(id:number, exp:Experience){
    return this.http.put<any>
    (this.url+`/exp/edit/${id}`, exp)
  }

  //CRUD imgExperience

  public imgExperienceList(id:number):Observable<ImgExperience[]>{
    return this.http.get<ImgExperience[]>(this.url+`/exp/img/list/${id}`)
  }

  public getImg(id:number):Observable<ImgExperience>{
    return this.http.get<ImgExperience>(this.url+`/exp/find/${id}`)
  }

  public addImgExperience(id:number, imgExp:ImgExperience):Observable<ImgExperience>{
    return this.http.post<ImgExperience>(this.url+`/exp/img/new/${id}`, imgExp)
  }
  
  public deleteImgExperience(idExp:number, idImg:number){
    return this.http.delete<ImgExperience>(this.url+`/exp/img/delete/${idExp}/${idImg}`)
  }
 
 public updateImg(id:number, img:ImgExperience){
  return this.http.put<any>(this.url+`/exp/ing/edit/${id}`, img)
 } 

}
