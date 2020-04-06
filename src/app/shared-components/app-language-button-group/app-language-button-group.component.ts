import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-language-button-group',
  templateUrl: './app-language-button-group.component.html',
  styleUrls: ['./app-language-button-group.component.less']
})
export class AppLanguageButtonGroupComponent implements OnInit {
  @Input() languages: Array<string> = ['All', 'en', 'fr', 'pt', 'it', 'ru'];
  @Input() currentIndex: number = 0;
  @Output() languageChange: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectLanguage(index, lang): void {
    this.currentIndex = index;
    this.languageChange.emit(lang);
  }
}
