import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxExtendedPdfViewerService, PageRenderedEvent, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {
  page : number;

  constructor(private pdfService: NgxExtendedPdfViewerService) {
    this.page = localStorage.getItem('pageNumber') == null ? 1 : Number(localStorage.getItem('pageNumber'));
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
  }

  onPageChanged($event: any) {
    console.log('onPageChanged', $event);
    this.page = $event;
    localStorage.setItem('pageNumber',this.page.toString());
  }
}
