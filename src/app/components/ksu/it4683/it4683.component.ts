import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it4683',
  templateUrl: './it4683.component.html',
  styleUrls: ['./it4683.component.scss']
})
export class It4683Component implements OnInit {
  
  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IT 4683 - MGT & HCI');
  }

}
