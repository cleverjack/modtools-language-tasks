import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme';

@Component({
  selector: 'main-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit{

  logoURL = '../../../assets/community-sift-logo-dark-bg.svg';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
  }

}
