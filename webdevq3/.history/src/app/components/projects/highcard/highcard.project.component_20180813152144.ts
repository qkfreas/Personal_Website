import { Component } from "../../../../../node_modules/@angular/core";

@Component
@Component({
    selector: 'app-home',
    templateUrl: './highcard.project.component.html',
    styleUrls: ['./highcard.project.component.scss']
})
export class highcard implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit() {
        
    }
}