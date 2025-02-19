import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(apiUrl:string){

   return this.http.get(apiUrl);

  }

  create(apiUrl:string, requestbody:any)
  {
    return this.http.post(apiUrl, requestbody);
  }

  delete(apiUrl:string, data:any)
  {
    return this.http.delete(apiUrl+data);
  }

  update(apiUrl:any, requestbody:any, dataId:any)
  {
    apiUrl +='/'+dataId; 

    return this.http.put(apiUrl,requestbody)
  }

}
