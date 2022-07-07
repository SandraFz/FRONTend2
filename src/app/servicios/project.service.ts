import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Projects } from "../model/projects";
import { IntegrationService } from "./integration.service";

@Injectable({providedIn:'root'})
export class ProjectService {

    url:string = environment.baseUrl;
    idPers:number = 1;

    constructor (private http:HttpClient){}
    
    public projectList():Observable<Projects[]>{
        return this.http.get<Projects[]>(this.url+'/project/list/'+this.idPers)
    }



}