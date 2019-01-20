import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InteractiveWordComponent } from '../interactive-word/interactive-word.component';
import { AdjectiveComponent } from './adjective.component';

const indexToUse = 3;
const adjectiveToUse = 'awesome';
const numberOfAdjectivesToUse = 6;

describe('AdjectiveComponent', () => {
  let component: AdjectiveComponent;
  let fixture: ComponentFixture<AdjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdjectiveComponent, InteractiveWordComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectiveComponent);
    component = fixture.componentInstance;
    component.index = indexToUse;
    component.adjective = adjectiveToUse;
    component.numberOfAdjectives = numberOfAdjectivesToUse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
