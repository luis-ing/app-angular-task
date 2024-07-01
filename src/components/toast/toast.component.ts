import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalStateService } from '../../global-state.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  // @Input() message: string = '';
  // @Input() messageType: 'danger' | 'success' | 'warning' = 'success';
  // isVisible: boolean = false;
  message: string = '';
  messageType: 'success' | 'danger' | 'warning' = 'success';
  isVisible: boolean = false;

  constructor(private globalState: GlobalStateService) { }

  ngOnInit() {
    this.globalState.toastState.subscribe(toast => {
      this.message = toast.message;
      this.messageType = toast.type;
      this.showToast();
    });
  }

  showToast() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 6000);
  }
}
