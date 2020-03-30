import { Component } from '@angular/core';

@Component({
	//pm for product management. Root because it is the root component
    selector: 'pm-root',
    template: `
	<div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
	</div>
    `
    // templateUrl: './product-list.component.html'
})

export class AppComponent {
	pageTitle: string = 'Acme Product Management';
}
