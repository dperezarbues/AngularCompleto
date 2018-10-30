import { Component, OnInit } from '@angular/core';
import { RESTCountriesService } from '../restcountries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countryName:string;
  capital:string[];

  constructor(private countriesSrv: RESTCountriesService) { }

  ngOnInit() {
  }

  showCapital = () => {
    this.countriesSrv.getCountry(this.countryName).
    subscribe(data=> this.capital = data.map(country => country.name + ': ' + country.capital),
    () => this.capital = ["COUNTRY NOT FOUND, TRY AGAIN"]);
  }
}
