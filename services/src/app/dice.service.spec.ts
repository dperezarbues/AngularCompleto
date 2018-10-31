import { TestBed } from '@angular/core/testing';

import { DiceService } from './dice.service';

describe('DiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceService = TestBed.get(DiceService);
    expect(service).toBeTruthy();
  });

  it('should return a number between 1 and max', () => {
    const max = 12
    const service: DiceService = TestBed.get(DiceService);
    
    expect(service.throwDice(max)).toBeLessThanOrEqual(max);
    expect(service.throwDice(max)).toBeGreaterThanOrEqual(1);
  });
});

