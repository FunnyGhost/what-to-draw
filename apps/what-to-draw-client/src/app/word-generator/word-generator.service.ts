import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordTypes } from './word-types';
import { WordsApiResponse } from './words-api-response';
import AdjectivesSet from './words-data/adjectives.json';
import NounsSet from './words-data/nouns.json';

@Injectable({
  providedIn: 'root'
})
export class WordGeneratorService {
  readonly nouns: string[];
  readonly adjectives: string[];

  constructor(private httpClient: HttpClient) {
    this.nouns = NounsSet.words;
    this.adjectives = AdjectivesSet.words;
  }

  getWord(wordType: WordTypes): string {
    switch (wordType) {
      case WordTypes.Noun:
        const randomNoun = this.getRandomItem(this.nouns);
        return randomNoun;
        break;
      case WordTypes.Adjective:
        const randomAdjective = this.getRandomItem(this.adjectives);
        return randomAdjective;
        break;

      default:
        break;
    }
  }

  getWordDetails(word: string): Observable<WordsApiResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'U8qlAjB1fjmshqcC482nlfEH4K09p18VbmxjsnmejHA6ZHPvtr'
      })
    };
    return this.httpClient.get<WordsApiResponse>(
      `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      httpOptions
    );
  }

  private getRandomItem(items: string[]): string {
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
  }
}
