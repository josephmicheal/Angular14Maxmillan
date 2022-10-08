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
  serverCreated = false;

  servers = ['AppServer 1', 'AppServer 2'];

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverAddStatus = 'Server was added, Name is '+this.serverName;
  }

  constructor() { 
    setTimeout(()=>{
      this.allowAddServer = true;
    },2000);
  }

  userName = "";

  updateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }
}
