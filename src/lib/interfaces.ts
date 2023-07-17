export interface Product {
  id: number,
  name: string,
  icon: string,
  description?: string,
}

type ProductAlias = string | {
  id: number,
  name: string,
  icon: string,
  description?: string,
}

enum ProductType {
  Sporting,
  Home,
}

type ProductTypeList = "Sporting" | "Home";
let p: ProductTypeList = "Sporting";