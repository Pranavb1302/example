import { Component } from "@angular/core"; // imorting component decorator 

@Component({
    selector: 'app-header', // use atleast 2 words seperated by  dash as they can overidde default html tags
    // template: '<h1>Hi</h1>'  //not recomendded
    
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false // this is true by default in my angular version
})
export class HeaderComponent{} // exporting this class so we can use it somewhere