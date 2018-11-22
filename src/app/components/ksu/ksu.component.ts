import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ksu',
  templateUrl: './ksu.component.html',
  styleUrls: ['./ksu.component.scss']
})
export class KsuComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Kennesaw State University');
  }

}
