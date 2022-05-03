import { TestBed } from '@angular/core/testing';

import { PdfquizService } from './pdfquiz.service';

describe('PdfquizService', () => {
  let service: PdfquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
