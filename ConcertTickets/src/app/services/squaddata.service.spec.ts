import { TestBed } from '@angular/core/testing';

import { SquaddataService } from './squaddata.service';

describe('SquaddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquaddataService = TestBed.get(SquaddataService);
    expect(service).toBeTruthy();
  });
});
