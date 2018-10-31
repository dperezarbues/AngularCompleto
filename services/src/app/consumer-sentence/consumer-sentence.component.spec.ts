import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSentenceComponent } from './consumer-sentence.component';
import { SentencesService } from '../sentences.service';

describe('ConsumerSentenceComponent', () => {
  let component: ConsumerSentenceComponent;
  let fixture: ComponentFixture<ConsumerSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerSentenceComponent ],
      providers: [SentencesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
