import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Project } from "../model/project";
import { IntegrationService } from "./integration.service";

@Injectable({providedIn:'root'})
export class ProjectService {

    url:string = environment.baseUrl;
    idPers:number = 1;

    constructor (private http:HttpClient){}
    
    public projectList():Observable<Project[]>{
        return this.http.get<Project[]>(this.url+'/project/list/'+this.idPers);
    }

    public addProject(idPers:number, proy:Project):Observable<Project>{
        return this.http.post<Project>(this.url+"/project/new/"+ idPers, proy);
    }


}