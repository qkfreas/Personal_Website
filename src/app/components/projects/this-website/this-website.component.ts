import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-this-website',
  templateUrl: './this-website.component.html',
  styleUrls: ['./this-website.component.scss']
})
export class ThisWebsiteComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Projects - This Website!');
  }
}
