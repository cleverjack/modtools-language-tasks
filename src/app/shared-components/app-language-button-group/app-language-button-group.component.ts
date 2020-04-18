import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-app-language-button-group',
  templateUrl: './app-language-button-group.component.html',
  styleUrls: ['./app-language-button-group.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppLanguageButtonGroupComponent),
      multi: true
    }
  ]
})
export class AppLanguageButtonGroupComponent implements OnInit {
  @Input() languages: Array<string> = ['All', 'en', 'fr', 'pt', 'it', 'ru'];
  @Input() currentIndex = 0;
  @Output() languageChange: EventEmitter<number> = new EventEmitter<number>();
  _value: string;
  private propagateChange = (_: any) => {};
  private propagateTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any) {
    if (value) {
      this._value = value;
      if (this.languages.length > 0) {
        this.currentIndex = this.languages.indexOf(value);
      }
    } else {
      if (this.languages.length > 0) {
        this._value = this.languages[0];
      }
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  selectLanguage(index, lang): void {
    this.currentIndex = index;
    this.propagateChange(lang);
    this.languageChange.emit(lang);
  }
}
