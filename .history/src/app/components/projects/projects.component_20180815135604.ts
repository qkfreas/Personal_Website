import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Projects');
  }
}
