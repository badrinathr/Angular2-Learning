
// Container Component

import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

@Component( { 
    selector:'pm-app',
    templateUrl:'appView.html',
    directives:[ProductListComponent],
    providers:[ProductService]
})

export class AppComponent { 
    pageTitle : string = "ACME Production Management Welcomes You";

}