import { TestBed } from '@angular/core/testing';

import { TastefulTreasureFormService } from './tasteful-treasure-form.service';

describe('TastefulTreasureFormService', () => {
  let service: TastefulTreasureFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TastefulTreasureFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
