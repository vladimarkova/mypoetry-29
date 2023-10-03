import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PageFlip } from 'page-flip';
import { IPoetry, poetries } from 'src/app/poetry/poetries';

export enum SizeType {
  /** Dimensions are fixed */
  FIXED = 'fixed',
  /** Dimensions are calculated based on the parent element */
  STRETCH = 'stretch',
}

export enum FlipType {
  PREV = 'prev',
  NEXT = 'next',
}

export enum PageState {
  READ = 'read',
  // ...
}

export enum Orientation {
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait'
}

export interface PageConfig {
  pageTotal: string | number,
  pageOrientation: Orientation,
  pageCurrent: number,
  pageState: PageState
}


@Component({
  selector: 'app-flip-book',
  templateUrl: './flip-book.component.html',
  styleUrls: ['./flip-book.component.scss']
})
export class FlipBookComponent implements AfterViewInit {
  @ViewChild('demoBookExample', { static: false }) demoBookExample!: ElementRef;
  flipType = FlipType;

  pageConfig: PageConfig = { pageTotal: '-', pageOrientation: Orientation.LANDSCAPE, pageCurrent: 1, pageState: PageState.READ };
  pageFlip!: PageFlip;

  bookTitle: string = 'My Poetry';

  poetryList: IPoetry[] = poetries;

  ngAfterViewInit() {
    const containerElement = this.demoBookExample.nativeElement;
    this.pageFlip = new PageFlip(
      containerElement,
      {
          width: 550, // base page width
          height: 733, // base page height

          size: SizeType.STRETCH,
          // set threshold values:
          minWidth: 315,
          maxWidth: 1000,
          minHeight: 420,
          maxHeight: 1350,

          maxShadowOpacity: 0.5, // Half shadow intensity
          showCover: true,
          mobileScrollSupport: false // disable content scrolling on mobile devices
      }
    );

    // load pages
    this.pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    if (this.pageFlip) {
      console.log('yes, page flip contents loaded...!');
      // this.pageConfig = { ...this.pageConfig,
      //   pageTotal: this.pageFlip.getPageCount(),
      //   pageOrientation: this.pageFlip.getOrientation()
      // };

      // // triggered by page turning
      this.pageFlip.on("flip", (e) => {
        this.pageConfig = { ...this.pageConfig, pageCurrent: (e.data as number) + 1 };
      });

      // // triggered when the state of the book changes
      // this.pageFlip.on("changeState", (e) => {
      //   this.pageConfig = { ...this.pageConfig, pageState: (e.data as PageState) };
      // });

      // // triggered when page orientation changes
      // this.pageFlip.on("changeOrientation", (e) => {
      //   this.pageConfig = { ...this.pageConfig, pageOrientation: (e.data as Orientation) };
      // });
    }
  }

  handleFlip(flipType: FlipType) {
    flipType === FlipType.PREV ? this.pageFlip.flipPrev() : this.pageFlip.flipNext(); // Turn to the prev/next page (with animation)
  }

}
