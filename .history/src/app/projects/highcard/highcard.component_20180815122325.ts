import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-highcard',
  templateUrl: './highcard.component.html',
  styleUrls: ['./highcard.component.scss']
})
export class HighcardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
