import { OneService } from './../one/one.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private oneService: OneService
  ) { }

  ngOnInit(): void {
  }

  open(): void {
    this.oneService.openAside();
  }

}
