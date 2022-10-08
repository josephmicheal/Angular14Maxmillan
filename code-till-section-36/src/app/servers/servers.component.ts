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
  serverAddStatus  = 'No servers are added'; 
  serverName = "";

  constructor() { 
    setTimeout(()=>{
      this.allowAddServer = true;
    },2000);
  }

  userName = "";

  onCreateServer(){
    this.serverAddStatus = 'Server was added, Name is '+this.serverName;
  }
  updateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }
}
