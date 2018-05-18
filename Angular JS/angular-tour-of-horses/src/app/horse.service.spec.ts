import { TestBed, inject } from '@angular/core/testing';

import { HorseService } from './horse.service';

describe('HorseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorseService]
    });
  });

  it('should be created', inject([HorseService], (service: HorseService) => {
    expect(service).toBeTruthy();
  }));
});
