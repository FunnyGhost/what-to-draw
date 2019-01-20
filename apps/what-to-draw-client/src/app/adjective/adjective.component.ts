import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'what-to-draw-adjective',
  templateUrl: './adjective.component.html',
  styleUrls: ['./adjective.component.scss']
})
export class AdjectiveComponent implements OnInit {
  @Input() index: number;
  @Input() adjective: string;
  @Input() numberOfAdjectives: number;

  @Output() refreshWord = new EventEmitter<string>();
  @Output() removeWord = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onRefreshAdjective(word: string): void {
    this.refreshWord.emit(word);
  }

  onRemoveAdjective(word: string): void {
    this.removeWord.emit(word);
  }
}
