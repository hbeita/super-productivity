import { TestBed } from '@angular/core/testing';

import { ImexMetaService } from './imex-meta.service';

describe('ImexMetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImexMetaService = TestBed.get(ImexMetaService);
    expect(service).toBeTruthy();
  });
});
