export interface IProduct {
  id: number;
  name: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductService {
    createProduct( data)
}
