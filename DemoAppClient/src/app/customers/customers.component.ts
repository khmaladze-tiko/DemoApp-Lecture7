import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  isVisible = false;
  searchField: string = '';

  constructor() { }

  customerList: { firstName: string; lastName: string; age: number }[] = [
    {
      firstName: 'Gigi',
      lastName: 'Hadid',
      age: 26,
    },
    {
      firstName: 'Johnny',
      lastName: 'Depp',
      age: 50,
    },
    {
      firstName: 'Marion',
      lastName: 'Cotillard',
      age: 46,
    },
    {
      firstName: 'Brad',
      lastName: 'Pitt',
      age: 60,
    },
    {
      firstName: 'Tom',
      lastName: 'Hardy',
      age: 44,
    },
  ];

  ngOnInit(): void {
  }
  toggleCustomers() {
    this.isVisible = !this.isVisible;
  }
}
