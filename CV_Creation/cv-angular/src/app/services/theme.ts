import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private key = 'cv-dark-mode';
  private _isDark = new BehaviorSubject<boolean>(false);
  readonly isDark$ = this._isDark.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const saved = localStorage.getItem(this.key) === '1';
      this._isDark.next(saved);
      this.updateUI(saved);
    }
  }

  toggleTheme(): void {
    const next = !this._isDark.getValue();
    if (this.isBrowser) {
      localStorage.setItem(this.key, next ? '1' : '0');
      this.updateUI(next);
    }
    this._isDark.next(next);
  }

  private updateUI(isDark: boolean) {
    if (this.isBrowser) {
      document.body.classList.toggle('dark-mode', isDark);
    }
  }

  isDarkMode(): boolean {
    return this._isDark.getValue();
  }
}
