import {Product} from "./product.model";

export class Finance{

  public id: number;
  public product: Product | any;
  public unitPrice: number;
  public balance: number;

  constructor({ id, product, unitPrice, balance}:
                { id?: number; product?: Product; unitPrice?: number; balance?: number;} = {}) {
    this.id = id || 0;
    this.product = product || {};
    this.unitPrice = unitPrice || 0;
    this.balance = balance || 0;
  }
}
