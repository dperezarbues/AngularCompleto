import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ConsumerDiceComponent } from './consumer-dice/consumer-dice.component';
import { ConsumerSentenceComponent } from './consumer-sentence/consumer-sentence.component';
import { SentencesService } from './sentences.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConsumerDiceComponent,
        ConsumerSentenceComponent
      ],
      providers: [SentencesService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'services'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('services');
  });
});
