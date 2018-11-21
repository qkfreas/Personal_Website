import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-strategy',
  templateUrl: './it-strategy.component.html',
  styleUrls: ['./it-strategy.component.scss']
})
export class ItStrategyComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IT Strategy');
  }


}
