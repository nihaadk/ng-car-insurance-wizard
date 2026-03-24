import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
})
export class Navbar {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  protected currentLang = signal(localStorage.getItem('lang') ?? 'en');
  protected isDark = signal(false);

  protected switchLanguage(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
  }

  protected toggleTheme(): void {
    this.isDark.update((v) => !v);
    this.document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light',
    );
  }
}
