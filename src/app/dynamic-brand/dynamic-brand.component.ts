import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-brand',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-brand.component.html',
  styleUrl: './dynamic-brand.component.scss',
})
export class DynamicBrandComponent implements OnInit, OnDestroy {
  private themeLinkId = 'brand-theme';
  private faviconId = 'brand-favicon';

  brand: string = '';
  logoUrl: string = '';

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      const brand = urlSegments[0]?.path;
      if (brand) {
        this.brand = brand;
        this.logoUrl = `assets/branding/${brand}/logo.png`;

        this.setThemeCss(brand);
        this.setFavicon(brand);
      }
    });
  }

  private setThemeCss(brand: string): void {
    const existing = document.getElementById(this.themeLinkId);
    if (existing) {
      this.renderer.removeChild(document.head, existing);
    }

    //Issuer array of objects
    const issuers = [
      { id: 1, name: 'regal', issuerid: 'vdno' },
      { id: 2, name: 'regal-funds-management', issuerid: 'vdno' },
      { id: 3, name: 'boardroom', issuerid: 'zzzz' },
      { id: 4, name: 'boardroomlimited', issuerid: 'zzzz' },
      { id: 5, name: 'wam', issuerid: 'zlwq' },
      { id: 6, name: 'wam-global', issuerid: 'zlwq' },
      { id: 7, name: 'realm', issuerid: 'trev' },
      { id: 8, name: 'realm-investment-house', issuerid: 'trev' },
    ];

    // Find the issuerId that matches the brand name.
    const issuerId = issuers.find(
      (i) => i.name === brand.toLocaleLowerCase()
    )?.issuerid;

    // If issuerId exists, then create the stylesheet link element
    if (issuerId) {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'id', this.themeLinkId);
      this.renderer.setAttribute(
        link,
        'href',
        `assets/themes/${issuerId}.scss`
      );
      this.renderer.appendChild(document.head, link);
    }
  }

  private setFavicon(brand: string): void {
    const exist = document.getElementById(this.faviconId);
    if (exist) {
      this.renderer.removeChild(document.head, exist);
    }

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'icon');
    this.renderer.setAttribute(link, 'type', 'image/x-icon');
    this.renderer.setAttribute(link, 'id', this.faviconId);
    this.renderer.setAttribute(
      link,
      'href',
      `assets/branding/${brand}/favicon.ico`
    );
    this.renderer.appendChild(document.head, link);
  }

  // remove the theme on destroy: not necessary (code)
  ngOnDestroy(): void {
    const exists = document.getElementById(this.themeLinkId);
    if (exists) {
      this.renderer.removeChild(document.head, exists);
    }
  }
}
