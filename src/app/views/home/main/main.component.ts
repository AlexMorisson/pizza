import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {map, Observable, Subject, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

// declare var bootstrap: any;
// import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  // private observable: Observable<number>;
  private subscription: Subscription | null = null;
  private subject: Subject<number>;



  // private promise: Promise<string>;

  constructor(private modalService: NgbModal) {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setInterval(() => {
      this.subject.complete();
    }, 4000);

    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('helloo');
    //   }, 2000);
    // })

    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setInterval(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // })

    // this.observable = from([1, 2, 3, 4, 5]);
  }

  ngOnInit() {
    // this.subscription = this.observable
    //   .subscribe(
    //     {
    //       next: (params: number) => {
    //         console.log('subscriber 1:', params);
    //       },
    //       error: (error: string) => {
    //         console.log('ERROR!!! ' + error);
    //       }
    //     }
    //   )

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();



    this.subscription = this.subject
      .subscribe(
        {
          next: (params: number) => {
            console.log('subscriber 1:', params);
          },
          error: (error: string) => {
            console.log('ERROR!!! ' + error);
          }
        }
      )

    // this.promise.then((params: string) => {
    //   console.log(params);
    // })
  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    // this.modalService.open(this.popup, { });
    this.popupComponent.open();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test() {

    // this.observable
    //   .pipe(
    //     map((param) => {
    //       return 'Число ' + param;
    //     })
    //   )
    //   .subscribe((params: string) => {
    //   console.log('subscriber 2:', params);
    // })

    this.subject
      .pipe(
        map((param) => {
          return 'Число ' + param;
        })
      )
      .subscribe((params: string) => {
      console.log('subscriber 2:', params);
    })
  }

}
