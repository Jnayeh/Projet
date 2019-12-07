import { TestBed } from '@angular/core/testing';

import { ShoplService } from './shopl.service';

describe('ShoplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoplService = TestBed.get(ShoplService);
    expect(service).toBeTruthy();
  });
});
