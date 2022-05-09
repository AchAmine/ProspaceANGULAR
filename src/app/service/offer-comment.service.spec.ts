import { TestBed } from '@angular/core/testing';

import { OfferCommentService } from './offer-comment.service';

describe('OfferCommentService', () => {
  let service: OfferCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
