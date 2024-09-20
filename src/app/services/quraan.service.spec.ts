import { TestBed } from '@angular/core/testing';

import { QuraanService } from './quraan.service';

describe('QuraanService', () => {
  let service: QuraanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuraanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
