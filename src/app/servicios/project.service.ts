import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Project } from "../model/Project";
import { IntegrationService } from "./integration.service";

@Injectable({providedIn:'root'})
export class ProjectService {

    @Output() open: EventEmitter <number> =new EventEmitter();
    
    url:string = environment.baseUrl;
    idPers:number = 1;

    constructor (private http:HttpClient){}
    
    public projectList():Observable<Project[]>{
        return this.http.get<Project[]>(this.url+'/project/list/'+this.idPers);
    }

public addProject(proy:Project):Observable<Project>{
        return this.http.post<Project>(this.url+"/project/new/"+this.idPers, proy);
    }

   //public addProject(proy:Project):Observable<Project>{
    //return this.http.post<Project>(this.url+"/project/new/"+ this.idPers, proy);
//}

public deleteProject(idProj:number){
    return this.http.delete<Project>(this.url+`/project/delete/1/${idProj}`)
}

public getProject(id:number){
    return this.http.get<Project>(this.url+`/project/find/${id}`)
}

public updateProject(id:number, proy:Project){
    return this.http.put<any>(this.url+'/project/edit/'+ `${id}`, proy)
}


}

export interface Proyecto{
    id_project:string;
    name_project:string;
    principal:boolean;
    img_proy:string;
    logo_img:string;
    link_project:string;
}
