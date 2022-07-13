import { Pipe, PipeTransform } from '@angular/core';
import { CustomersComponent } from './customers.component';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {
  transform(
    value: {
      firstName: string;
      lastName: string;
      age: number;
    }[],
    searchValue: string
  ): {
    firstName: string;
    lastName: string;
    age: number;
  }[] {
    if (searchValue === '') {
      return value;
    }
    return value.filter((customer) =>
      customer.firstName.toLowerCase().includes(searchValue)
    );
  }
}
