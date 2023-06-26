export class Product {
  productId: number | any;
  description: string;
  number: number;
  price: number;
  quantityInStock: number;
  packingVolume: string;
  registrationDate: Date;


  constructor({
                description,
                number,
                packingVolume,
                price,
                productId,
                quantityInStock,
                registrationDate
              }: {
    description: string;
    number: number;
    packingVolume: string;
    price: number;
    productId?: number;
    quantityInStock: number;
    registrationDate: Date;
  }) {
    this.productId = productId;
    this.description = description;
    this.number = number;
    this.price = price;
    this.quantityInStock = quantityInStock;
    this.packingVolume = packingVolume;
    this.registrationDate = registrationDate;
  }

}
