import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp-info',
  templateUrl: './erp-info.component.html',
  styleUrls: ['./erp-info.component.scss']
})
export class ErpInfoComponent implements OnInit {

  aboutURL = '/#test';
  servicesURL = '/#services';
  welcomeURL = '/#welcome';

  constructor() { }

  ngOnInit(): void {
  }

}
