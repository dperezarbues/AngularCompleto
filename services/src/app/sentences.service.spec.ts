import { TestBed } from '@angular/core/testing';

import { SentencesService } from './sentences.service';

describe('SentencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SentencesService]
  }));

  it('should be created', () => {
    const service: SentencesService = TestBed.get(SentencesService);
    expect(service).toBeTruthy();
  });

  it('should return a random phrase', () => {
    const max = 12
    const service: SentencesService = TestBed.get(SentencesService);
    
    expect(service.getPhrase()).toContain('phrase');
  });

  it('should return a random spanish phrase', () => {
    const max = 12
    const service: SentencesService = TestBed.get(SentencesService);
    
    expect(service.dameFrase()).toContain('frase');
  });
});
