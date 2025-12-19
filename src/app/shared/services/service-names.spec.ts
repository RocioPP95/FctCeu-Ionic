import { TestBed } from '@angular/core/testing';

import { ServiceNames } from './service-names';

describe('ServiceNames', () => {
  let service: ServiceNames;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNames);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
