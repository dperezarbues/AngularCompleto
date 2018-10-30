import { Component, OnInit } from '@angular/core';
import { SentencesService } from '../sentences.service';

@Component({
  selector: 'app-consumer-sentence',
  templateUrl: './consumer-sentence.component.html',
  styleUrls: ['./consumer-sentence.component.css']
})
export class ConsumerSentenceComponent implements OnInit {
  frase:string;
  phrase:string;

  constructor(private sentenceSrv: SentencesService) { }

  ngOnInit() {
  }

  dameFrase = () => this.frase = this.sentenceSrv.dameFrase();
  getPhrase = () => this.phrase = this.sentenceSrv.getPhrase();
}
