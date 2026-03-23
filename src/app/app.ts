import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { NavigationStore } from './store/navigation.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Footer],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private router = inject(Router);
  private navigationStore = inject(NavigationStore);

  ngOnInit(): void {
    // Sync NavigationStore with the current route on navigation events
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        const path = (e as NavigationEnd).urlAfterRedirects.replace('/', '');
        this.navigationStore.syncWithPath(path);
      });

    // Sync on initial load
    const initialPath = this.router.url.replace('/', '');
    this.navigationStore.syncWithPath(initialPath);
  }
}
