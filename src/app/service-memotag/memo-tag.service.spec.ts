import { TestBed } from '@angular/core/testing';

import { MemoTagService } from './memo-tag.service';

describe('MemoTagService', () => {
  let service: MemoTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
