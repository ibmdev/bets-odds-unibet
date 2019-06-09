import { Injectable, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { versions } from 'src/environments/build_info';

@Injectable({
  providedIn: 'root'
})
export class TranslateApiService implements OnInit {

  translationsUrl = 'assets/i18n';

  ngOnInit() {
    this.loadTranslations('', 'fr');
   }

  constructor(private translate: TranslateService, private http: HttpClient)  {}
  setDefaultLang(lang: string) {
    this.translate.setDefaultLang(lang);
   }
   useLanguage(language: string) {
    this.translate.use(language);
    }
    resetLang(lang: string) {
      this.translate.resetLang(lang);
    }
    loadTranslations(path: string, locale: string) {
      return this.http.get(this.translationsUrl + '/' + path + locale + '_' + versions.revision + '.json').subscribe((data: any) => {
        this.translate.setTranslation(locale, data);
        if (locale === 'fr') {
          this.useLanguage('fr');
          this.setDefaultLang('fr');
        }
      });
    }
}

