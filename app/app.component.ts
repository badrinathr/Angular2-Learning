
// Container Component

import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; // Load all features


@Component( { 
    selector:'pm-app',
    templateUrl:'appView.html',
    directives:[ProductListComponent],
    providers:[ProductService,
                HTTP_PROVIDERS]
})

export class AppComponent { 
    pageTitle : string = "ACME Production Management Welcomes You";

}