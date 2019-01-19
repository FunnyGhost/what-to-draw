import { HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { WordGeneratorService } from './word-generator.service';
import { WordTypes } from './word-types';
import { WordsApiResponse } from './words-api-response';
import AdjectivesSet from './words-data/adjectives.json';
import NounsSet from './words-data/nouns.json';

describe('WordGeneratorService', () => {
  const nouns = NounsSet.words;
  const adjectives = AdjectivesSet.words;

  let service: WordGeneratorService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(WordGeneratorService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getWord', () => {
    it('should return a noun', () => {
      const result = service.getWord(WordTypes.Noun);

      expect(nouns.includes(result)).toBeTruthy();
    });

    it('should return a random noun', () => {
      const firstResult = service.getWord(WordTypes.Noun);
      const secondResult = service.getWord(WordTypes.Noun);

      expect(firstResult).not.toEqual(secondResult);
    });

    it('should return an adjective', () => {
      const result = service.getWord(WordTypes.Adjective);

      expect(adjectives.includes(result)).toBeTruthy();
    });

    it('should return a random adjective', () => {
      const firstResult = service.getWord(WordTypes.Adjective);
      const secondResult = service.getWord(WordTypes.Adjective);

      expect(firstResult).not.toEqual(secondResult);
    });
  });

  describe('getWordDetails', () => {
    it('should get the word details', () => {
      const dataToReturn = {
        word: 'batman',
        definitions: [
          {
            definition: 'A superhero',
            partOfSpeech: 'noun'
          },
          {
            definition: 'A guy wearing a bat costume',
            partOfSpeech: 'noun'
          }
        ]
      } as WordsApiResponse;

      const wordToUse = 'batman';
      service
        .getWordDetails(wordToUse)
        .subscribe((response: WordsApiResponse) => {
          expect(response).toEqual(dataToReturn);
        });

      const req = httpTestingController.expectOne(
        (request: HttpRequest<any>) => {
          const containsUrl = request.url.includes(
            environment.wordsApiEndpoint
          );
          const containsAuthenticationHeader =
            request.headers.get(environment.wordsApiHeaderName) ===
            environment.wordsApiHeaderValue;
          const containsWord = request.url.includes(wordToUse);
          return containsUrl && containsAuthenticationHeader && containsWord;
        }
      );

      expect(req.request.method).toEqual('GET');

      req.flush(dataToReturn);

      httpTestingController.verify();
    });
  });
});
