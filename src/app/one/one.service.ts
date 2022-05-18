import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  asideStatus: boolean = false;
  emitAsideStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.asideStatus);

  constructor() { }

  openAside(): void {
    this.asideStatus = true;
    this.emitAside();
  }

  closeAside(): void {
    this.asideStatus = false;
    this.emitAside();
  }

  emitAside(): void {
    this.emitAsideStatus.next(this.asideStatus);
  }
}
