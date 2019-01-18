import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WordGeneratorService } from './word-generator/word-generator.service';
import { WordTypes } from './word-generator/word-types';

@Component({
  selector: 'what-to-draw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public nouns: string[] = [];
  public get adjectivesChain(): string {
    if (this.adjectives.length === 1) {
      return this.adjectives[0];
    } else {
      let chain = this.adjectives[0];
      for (let index = 1; index < this.adjectives.length; index++) {
        const adjective = this.adjectives[index];
        if (index === this.adjectives.length - 1) {
          chain += ` and ${adjective}`;
        } else {
          chain += `, ${adjective}`;
        }
      }

      return chain;
    }
  }
  public get article(): 'a' | 'an' | '' {
    if (this.adjectives.length > 0) {
      const firstLetter = this.adjectives[0].substring(0, 1);
      if (this.vowels.includes(firstLetter)) {
        return 'an';
      }
      return 'a';
    }
    return '';
  }

  private adjectives: string[] = [];
  private readonly vowels = ['a', 'e', 'i', 'o', 'u'];

  constructor(private wordGenerator: WordGeneratorService) {}

  ngOnInit() {
    this.initAdjectives();
    this.initNouns();
  }

  public addAdjective(): void {
    this.adjectives = [
      ...this.adjectives,
      this.wordGenerator.getWord(WordTypes.Adjective)
    ];
  }

  private initAdjectives(): void {
    this.adjectives = [this.wordGenerator.getWord(WordTypes.Adjective)];
  }

  private initNouns(): void {
    this.nouns = [this.wordGenerator.getWord(WordTypes.Noun)];
  }
}
