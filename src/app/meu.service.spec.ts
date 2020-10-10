import { TestBed } from '@angular/core/testing';

import { MeuService } from './meu.service';

describe('MeuService', () => {
  let service: MeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
