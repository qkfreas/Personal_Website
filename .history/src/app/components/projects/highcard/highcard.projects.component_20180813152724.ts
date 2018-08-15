import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'high-card-project',
    templateUrl: './highcard.project.component.html',
    styleUrls: ['./highcard.project.component.scss']
})
export class HighCard implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit() {
        
    }
}