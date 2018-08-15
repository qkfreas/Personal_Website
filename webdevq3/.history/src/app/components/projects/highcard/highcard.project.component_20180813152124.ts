import { Component } from "../../../../../node_modules/@angular/core";

@Component
@Component({
    selector: 'app-home',
    templateUrl: './highcard.project.component.html',
    styleUrls: ['./highcard.project.scss']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit() {
        
    }
}