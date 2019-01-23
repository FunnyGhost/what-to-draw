import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { WordDisplayMode } from './word-display-mode';

@Component({
  selector: 'what-to-draw-interactive-word',
  templateUrl: './interactive-word.component.html',
  styleUrls: ['./interactive-word.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveWordComponent implements OnInit {
  @Input() word: string;
  @Input() displayMode: WordDisplayMode;
  @Output() refreshWord = new EventEmitter<string>();
  @Output() removeWord = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onRefresh(): void {
    this.refreshWord.emit(this.word);
  }

  onRemove(): void {
    this.removeWord.emit(this.word);
  }
}
