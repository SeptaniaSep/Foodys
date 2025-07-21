export interface Foods {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "food" | "drink" | "snack";
}

export const products: Foods[] = [
  { 
    id: 1, 
    name: "Nasi Gerong", 
    price: 15000, 
    description: "Ini bla bla bla blubub blubuu",
    image: "/img/mk1.jpg",
    category: "food"
},
  { 
    id: 2, 
    name: "Sate Binatang", 
    price: 20000, 
    description: "Gugu gaga gaga gugug gigi",
    image: "/img/mk3.jpg",
    category: "food" 
},
  { 
    id: 3, 
    name: "Mie Tepung", 
    price: 15000, 
    description: "wa wa wi wawa wi wawa wi wawawa",
    image: "/img/mk2.jpg",
    category: "food" 
},
{ 
    id: 4, 
    name: "Steak Daging Hewan", 
    price: 25000, 
    description: "wa wa wi wawa wi wawa wi wawawa",
    image: "/img/mk4.jpg",
    category: "food" 
},
];
