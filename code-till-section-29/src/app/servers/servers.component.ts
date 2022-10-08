import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // selector as element
  //selector: '[app-servers]',// selector as attribute
  selector: '.app-servers',// selector as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer: boolean = false;

  constructor() { 
    setTimeout(()=>{
      this.allowAddServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

 
}
