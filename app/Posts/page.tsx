import { ProductList } from "./productList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-4">Menu</h1>
      <ProductList />
    </main>
  );
}
