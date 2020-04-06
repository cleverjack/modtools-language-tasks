import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FilterService } from 'src/app/services/filter.service';
import { Store } from '@ngrx/store';
import * as DiagnoseActions from '../../store/actions/diagnose.actions';

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;
  faEllipsisH = faEllipsisH;
  closeSearch = 1;
  searchText = '';

  constructor(private filterService: FilterService, private readonly store: Store){}

  ngOnInit() {
  }

  onKeyUp (event) {
    if (this.searchText.length > 0 && event.keyCode === 13) {
      const data = {
        clientId: 60,
        language: 'en',
        text: this.searchText,
        contentType: 'SHORT_TEXT'
      }

      this.filterService.setSearchText(this.searchText);
      this.store.dispatch(DiagnoseActions.requestProcessText({data}));
    }
  }
}
