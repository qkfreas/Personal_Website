import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'high-card-project',
    templateUrl: './highcard.projects.component.html',
    styleUrls: ['./highcard.projects.component.scss']
})
export class HighCard implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit() {
        
    }
}