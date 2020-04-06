import { Component, OnInit } from '@angular/core';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../theme';

@Component({
  selector: 'a11y-flyout',
  templateUrl: './a11y-flyout.component.html',
  styleUrls: ['./a11y-flyout.component.less']
})
export class A11yFlyoutComponent implements OnInit {
  faUniversalAccess = faUniversalAccess;

  constructor(private themeService: ThemeService) {}

  themeActivate(value) {
    if (value === 'darkMode') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  ngOnInit() {
  }

}
