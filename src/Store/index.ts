import { makeObservable, observable, action } from "mobx";

interface Customer {
  id: number;
  name: string;
  completed: boolean;
}

class CustomerStore {
  customer: Customer[] = [];

  constructor() {
    makeObservable(this, {
      customer: observable,

      addCustomer: action,
    });
  }

  addCustomer = (value) => {
    this.customer.push(value);
  };
}
