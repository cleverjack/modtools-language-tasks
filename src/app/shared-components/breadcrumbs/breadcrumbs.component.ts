import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { checkServerIdentity } from 'tls';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit () { }
}
