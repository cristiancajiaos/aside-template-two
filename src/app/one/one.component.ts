import { OneService } from './one.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  asideStatus = false;
  asideObs!: Subscription;

  constructor(
    private oneService: OneService
  ) { }

  ngOnInit(): void {
    this.asideObs = this.oneService.emitAsideStatus.subscribe(obs => {
      this.asideStatus = obs;
    });
  }

  ngOnDestroy(): void {
    this.asideObs.unsubscribe();
  }

  close(): void {
    this.oneService.closeAside();
  }

}
