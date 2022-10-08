import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // selector as element
  //selector: '[app-servers]',// selector as attribute
  selector: '.app-servers',// selector as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
