import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-non-stop-img',
  templateUrl: './non-stop-img.component.html',
  styleUrls: ['./non-stop-img.component.css']
})
export class NonStopImgComponent implements OnInit {

  imgNames= [
    'apple.png',
    'lemon.png',
    'orange.png',
    'strawberry.png'
  ];

  myObservable = new Observable(
    (observer) => {
      let i = 0;
      setInterval(
        () => {
          if (i == this.imgNames.length) {
            i = 0;
          } else {
            observer.next(this.imgNames[i++])
          }
        }, 500
      );
    }
  );

  constructor() { }

  ngOnInit(): void {
    this.myObservable.subscribe(
      (data) => data
    );
  }

}
