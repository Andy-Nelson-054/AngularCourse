//belongs to AppModule

import { Component } from '@angular/core';

//decorato
@Component({
    selector: 'pm-products', //creates a directive
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    //use 'any' in ts when you don't care about the datatype
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "gdn-0023", "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden...",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "tbx-0048",
            "releaseDate": "May 21, 2019", 
            "description": "Curved claw steel hammer", 
            "price": 8.9,
            "starRating": 4.8, 
            "imageUrl": "assets/images/hammer.png"
        } 
    ]; 

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
