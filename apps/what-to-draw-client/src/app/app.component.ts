import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fade, slide } from './animations';
import { WordGeneratorService } from './word-generator/word-generator.service';
import { WordTypes } from './word-generator/word-types';

@Component({
  selector: 'what-to-draw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slide, fade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public nouns: string[] = [];
  public adjectives: string[] = [];

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

  public onRefreshAdjective(adjectiveToRefresh: string): void {
    const newAdjective = this.wordGenerator.getWord(WordTypes.Adjective);
    this.adjectives = this.adjectives.map((word: string) => {
      if (word === adjectiveToRefresh) {
        return newAdjective;
      }
      return word;
    });
  }

  public onRemoveAdjective(adjectiveToRemove: string): void {
    this.adjectives = this.adjectives.filter(
      (word: string) => word !== adjectiveToRemove
    );
  }

  private initAdjectives(): void {
    this.adjectives = [this.wordGenerator.getWord(WordTypes.Adjective)];
  }

  private initNouns(): void {
    this.nouns = [this.wordGenerator.getWord(WordTypes.Noun)];
  }
}
