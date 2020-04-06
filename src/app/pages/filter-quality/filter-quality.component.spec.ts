import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterQualityComponent } from './filter-quality.component';

describe('FilterQualityComponent', () => {
  let component: FilterQualityComponent;
  let fixture: ComponentFixture<FilterQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
