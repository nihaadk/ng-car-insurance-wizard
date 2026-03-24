import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { StepNav } from './components/step-nav/step-nav';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Footer, StepNav],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private router = inject(Router);
  private store = inject(Store);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        const path = (e as NavigationEnd).urlAfterRedirects.replace('/', '');
        this.store.syncWithPath(path);
      });

    const initialPath = this.router.url.replace('/', '');
    this.store.syncWithPath(initialPath);
  }
}
