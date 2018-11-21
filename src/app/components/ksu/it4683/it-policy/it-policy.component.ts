import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-policy',
  templateUrl: './it-policy.component.html',
  styleUrls: ['./it-policy.component.scss']
})
export class ItPolicyComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IT Policy');
  }


}
