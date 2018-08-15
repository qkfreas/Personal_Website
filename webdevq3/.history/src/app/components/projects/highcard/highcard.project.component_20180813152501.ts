import { Component, OnInit } from "../../../../../node_modules/@angular/core";
import { Router } from "../../../../../node_modules/@angular/router";

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