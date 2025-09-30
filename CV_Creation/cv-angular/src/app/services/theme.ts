import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private key = 'cv-dark-mode';
  private _isDark = new BehaviorSubject<boolean>(false);
  readonly isDark$ = this._isDark.asObservable();

  constructor() {
    const saved = localStorage.getItem(this.key) === '1';
    this._isDark.next(saved);
    this.updateUI(saved);
  }

  toggleTheme(): void {
    const next = !this._isDark.getValue();
    localStorage.setItem(this.key, next ? '1' : '0');
    this._isDark.next(next);
    this.updateUI(next);
  }

  private updateUI(isDark: boolean) {
    document.body.classList.toggle('dark-mode', isDark);
  }

  isDarkMode(): boolean {
    return this._isDark.getValue();
  }
}
