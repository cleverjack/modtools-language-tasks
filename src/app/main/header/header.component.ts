import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';
import { LanguageTasksService } from 'src/app/services/language-tasks.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user:User

  constructor(public UserService:UserService, private languageTaskService: LanguageTasksService) { }

  async ngOnInit() {
    this.user = await this.UserService.me();
    this.languageTaskService.subscribeCurrentTask().subscribe(task => {
      console.log(task);
    })
  }

  onUserChangedClient (newClient:number) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.lastClientId = newClient;
    this.UserService.preferences = prefs;
  }

  onUserChangedLanguage (newLanguage:string) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.language = newLanguage;
    this.UserService.preferences = prefs;
  }

}
