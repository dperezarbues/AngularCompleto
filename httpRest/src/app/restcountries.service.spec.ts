import { TestBed } from '@angular/core/testing';

import { RESTCountriesService } from './restcountries.service';

describe('RESTCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RESTCountriesService = TestBed.get(RESTCountriesService);
    expect(service).toBeTruthy();
  });
});
