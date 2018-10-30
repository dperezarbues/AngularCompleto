import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RESTCountriesService {
  BASEURI = 'https://restcountries.eu/rest/v2'

  constructor(private http:HttpClient) { }

  getCountry(countryName:String): Observable<any>{ 
    return this.http.get(`${this.BASEURI}/name/${countryName}`)
  }
}
