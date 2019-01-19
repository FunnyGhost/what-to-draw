import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveWordComponent } from './interactive-word.component';

describe('InteractiveWordComponent', () => {
  let component: InteractiveWordComponent;
  let fixture: ComponentFixture<InteractiveWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
