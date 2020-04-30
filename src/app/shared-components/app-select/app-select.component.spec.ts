import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppSelectComponent } from './app-select.component';

describe('AppSelectComponent', () => {
  let component: AppSelectComponent;
  let fixture: ComponentFixture<AppSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSelectComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectComponent);
    component = fixture.componentInstance;
    const _selectedItem: any = {
      id: 'test',
      label: 'test'
    };
    const multiple: boolean = false;

    component.multiselect = multiple;
    component._selectedItem = _selectedItem;
    component.items = [{
      id: 'test1',
      label: 'test1',
      selected: false
    }, {
      id: 'test2',
      label: 'test2',
      selected: false
    }, {
      id: 'test3',
      label: 'test3',
      selected: false
    }, {
      id: 'test4',
      label: 'test4',
      selected: false
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create multiple select box', () => {
    component.multiselect = true;
    expect(component).toBeTruthy();
  });
});
