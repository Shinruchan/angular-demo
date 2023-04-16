import { Component, HostBinding, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  private router: Router = inject(Router);

  @HostBinding('class.clickable') isClickable: boolean = true;

  @HostListener('click')
  navigateToHome() {
    this.router.navigateByUrl('/');
  }
}
