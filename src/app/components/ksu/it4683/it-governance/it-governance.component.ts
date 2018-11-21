import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-governance',
  templateUrl: './it-governance.component.html',
  styleUrls: ['./it-governance.component.scss']
})
export class ItGovernanceComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IT Governance');
  }


}
