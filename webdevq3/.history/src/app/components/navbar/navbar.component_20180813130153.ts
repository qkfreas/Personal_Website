import { Component, OnInit } from "../../../../node_modules/@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    constructor(public router: Router) {}

    ngOnInit() {
        
    }
}