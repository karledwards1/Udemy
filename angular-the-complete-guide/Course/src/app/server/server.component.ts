import { Component, OnInit } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      font-weight: bold;
    }
  `]
})

export class ServerComponent extends ServersComponent {
  serverStatus = 'offline';

  constructor() {
    super();
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getStatus() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
