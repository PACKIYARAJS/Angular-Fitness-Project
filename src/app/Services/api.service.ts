import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(){

   return this.http.get('https://retoolapi.dev/rIW3fl/data/');

  }

  create(requestbody:any)
  {
    return this.http.post('https://retoolapi.dev/rIW3fl/data/', requestbody);
  }

  delete(data:any)
  {
    return this.http.delete('https://retoolapi.dev/rIW3fl/data/'+data);
  }

}
