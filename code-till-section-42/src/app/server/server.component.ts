import { Component } from "@angular/core";

@Component({
    selector:"server-component",
    styles:[`
    .online{
        color: white;
    }
    `],
    templateUrl: "./server.component.html"
})
export class ServerComponent{
    serverId: number = 88;
    serverStatus: string = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }
}