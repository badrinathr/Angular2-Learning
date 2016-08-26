
// Container Component

import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductService} from './products/product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, RouteConfig,ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';

import 'rxjs/Rx'; // Load all features


@Component( { 
    selector:'pm-app',
    templateUrl:'./app/appView.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[ProductService,
                HTTP_PROVIDERS, 
                ROUTER_PROVIDERS]
})

@RouteConfig ([
    { name : 'WelcomePage', path : '/welcome',  component : WelcomeComponent, useAsDefault : true}, 
    { name : 'ProductsPage', path : '/products', component : ProductListComponent},
    { name : "ProductDetail", path : '/product/:id', component : ProductDetailComponent}
]) 



export class AppComponent { 
    pageTitle : string = "ACME Product Management";

}