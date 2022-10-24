import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  Apiurl = environment.ApiUrl;

  constructor(private _http:HttpClient) { }

  public postData(url: string, object: any ){
    return this._http.post(`${this.Apiurl}${url}`, object);

  }
}
