import { TestBed } from '@angular/core/testing';
import { WordGeneratorService } from './word-generator.service';

describe('WordGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordGeneratorService = TestBed.get(WordGeneratorService);
    expect(service).toBeTruthy();
  });
});
