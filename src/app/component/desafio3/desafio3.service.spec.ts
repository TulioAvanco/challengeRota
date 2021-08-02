import { TestBed } from '@angular/core/testing';

import { Desafio3Service } from './desafio3.service';

describe('Desafio3Service', () => {
  let service: Desafio3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Desafio3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
