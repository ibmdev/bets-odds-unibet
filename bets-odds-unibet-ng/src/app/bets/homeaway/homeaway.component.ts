import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateApiService } from '../../services/translate/translate-api.service';

@Component({
  selector: 'app-homeaway',
  templateUrl: './homeaway.component.html',
  styleUrls: ['./homeaway.component.css']
  // ,providers:  [ TranslateApiService ] Rend le service Singleton
})
export class HomeawayComponent implements OnInit, OnDestroy {

  constructor(private translateAPI: TranslateApiService) {
    this.translateAPI.loadTranslations('homeaway/', 'fr');
    this.translateAPI.loadTranslations('homeaway/', 'en');
   }

  ngOnInit() {
    console.log('Init HomeawayComponent ');
  }
  ngOnDestroy() {
    console.log('Destroy HomeawayComponent ');
    this.translateAPI.resetLang('en');
  }

  useLanguage(language: string) {
    this.translateAPI.useLanguage(language);
  }
  resetLang(language: string) {
    this.translateAPI.resetLang(language);
  }

}
