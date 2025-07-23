export interface Foods {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "food" | "dessert" | "drink" ;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
