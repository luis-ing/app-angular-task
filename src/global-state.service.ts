import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  // private sessionSubject = new BehaviorSubject<boolean>(this.hasSession());
  // isLoggedIn = this.sessionSubject.asObservable();

  private toastSubject = new Subject<{ message: string, type: 'success' | 'danger' | 'warning' }>();
  toastState = this.toastSubject.asObservable();

  constructor() { }

  showToast(message: string, type: 'success' | 'danger' | 'warning') {
    this.toastSubject.next({ message, type });
  }

  // login() {
  //   localStorage.setItem('session', 'true');
  //   this.sessionSubject.next(true);
  // }

  // logout() {
  //   localStorage.removeItem('session');
  //   this.sessionSubject.next(false);
  // }

  // private hasSession(): boolean {
  //   return localStorage.getItem('session') === 'true';
  // }
}
