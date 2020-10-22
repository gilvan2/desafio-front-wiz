import { TestBed } from '@angular/core/testing';

import { BuscaFilmesService } from './busca-filmes.service';

describe('BuscaFilmesService', () => {
  let service: BuscaFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
