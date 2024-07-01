import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GlobalStateService } from '../global-state.service';
import { ToastComponent } from "../components/toast/toast.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        ToastComponent
    ]
})
export class AppComponent {
  title = 'my-app-angular';
  isLoggedIn: boolean = false;
}
