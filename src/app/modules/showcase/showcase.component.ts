import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmodes(){
    this.chkScreenMode();
  }

  elem: any;
  isFullScreen: boolean | undefined;



  imageList : string[] = [
    '../../../assets/img/proyecto-cooperacion/1.jpg',
    '../../../assets/img/proyecto-cooperacion/2.jpg',
    '../../../assets/img/proyecto-cooperacion/3.jpg',
    '../../../assets/img/proyecto-cooperacion/4.jpg',
    '../../../assets/img/proyecto-cooperacion/5.jpg',
    '../../../assets/img/proyecto-cooperacion/6.jpg',
    '../../../assets/img/proyecto-cooperacion/7.jpg',
    '../../../assets/img/proyecto-cooperacion/8.jpg',
    '../../../assets/img/proyecto-cooperacion/9.jpg',
    '../../../assets/img/proyecto-cooperacion/10.jpg',
    '../../../assets/img/proyecto-cooperacion/11.jpg',
    '../../../assets/img/proyecto-cooperacion/12.jpg',
    '../../../assets/img/proyecto-cooperacion/13.jpg',
    '../../../assets/img/proyecto-cooperacion/14.jpg',
    '../../../assets/img/proyecto-cooperacion/15.jpg'
  ];

  constructor(@Inject(DOCUMENT) private document: any,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.chkScreenMode();
    this.elem = document.documentElement;
    this.carousel!.pause();
  }

  chkScreenMode(){
      if(document.fullscreenElement){
        //fullscreen
        this.isFullScreen = true;
      }else{
        //not in full screen
        this.isFullScreen = false;
      }
    }

    openFullscreen() {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    }

    closeFullscreen() {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }

    backHome(){
      this.router.navigate(['/']);
      localStorage.setItem('hiddenNav', 'false');
    }

}
