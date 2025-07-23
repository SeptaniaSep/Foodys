import { drink } from "../Dummy/drinks";
import BestSellerToast from "./toast";

export default function Toast() {
  const bestSellerIds = [31, 35, 36];
  const bestSellers = drink.filter((item) => bestSellerIds.includes(item.id));
  return (
    <div>
      <BestSellerToast products={bestSellers} />
    </div>
  );
}
