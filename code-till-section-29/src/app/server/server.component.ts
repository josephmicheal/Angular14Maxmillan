import { Component } from "@angular/core";

@Component({
    selector:"server-component",
    styleUrls:[],
    templateUrl: "./server.component.html"
})
export class ServerComponent{
    serverId: number = 88;
    serverStatus: string = 'online';

    getServerStatus(){
        return this.serverStatus;
    }
}