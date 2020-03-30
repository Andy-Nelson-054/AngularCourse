//belongs to AppModule

import { Component } from '@angular/core';

@Component({
    selector: 'pm-products', //creates a directive
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List!';
    //use 'any' in ts when you don't care about the datatype
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023", "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden...",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assests/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2019", 
            "description": "Curved claw steel hammer", 
            "price": 8.9,
            "starRating": 4.8, 
            "imageUrl": "assests/images/hammer.png"
        } 
    ]; 
}
