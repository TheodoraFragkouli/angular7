import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: `
  //            <app-server></app-server>
  //            <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Rou';
  serverCreated=false;
  servers = ['TestServer', 'AnotherServer'];

  constructor() {
    setTimeout( () => {this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated= true;
    this.serverCreationStatus = 'Server was created. Server name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName($event) {
    console.log($event);
    // this.serverName = <HTMLInputElement>event.target.value;
  }
}
