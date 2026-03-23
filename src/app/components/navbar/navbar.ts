import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
})
export class Navbar {
  private translate = inject(TranslateService);
  protected currentLang = signal(this.translate.currentLang ?? 'en');

  protected switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
