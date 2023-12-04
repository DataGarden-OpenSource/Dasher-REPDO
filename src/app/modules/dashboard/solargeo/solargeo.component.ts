import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-solargeo',
  templateUrl: './solargeo.component.html',
  styleUrls: ['./solargeo.component.scss']
})
export class SolargeoComponent implements OnInit {
  public safeUrl: SafeResourceUrl;
  isVisible = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://globalsolaratlas.info/');
   }

  ngOnInit(): void {
  }

  toggleCard() {
    this.isVisible = !this.isVisible;
  }

}
