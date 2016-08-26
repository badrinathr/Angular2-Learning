import {Pipe, PipeTransform} from 'angular2/core';
import {IProduct} from './product';


@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform { 
 
    transform(value: IProduct[], args:string[]) : IProduct[] { 
        let filterValue:string = args[0]?args[0].toLocaleLowerCase():null;
        return filterValue ? value.filter((product:IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterValue) != -1):value ;

    }
}