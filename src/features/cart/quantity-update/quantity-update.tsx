import { FC } from "react";
import { Button, Loader } from "src/shared/ui";
import { useUpdateQuantity } from "./queries/use-quantity-update";
interface IQuantityUpdate {
  id: string;
  quantity: number;
}
export const QuantityUpdate: FC<IQuantityUpdate> = ({ id, quantity }) => {
  const { updateQuantity, isLoading, error } = useUpdateQuantity(id);
  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex gap-1 items-center">
      <Button
        variant="outlined"
        onClick={() => updateQuantity("decrease")}
        className="w-3 h-5"
        disabled={isLoading}
      >
        -
      </Button>
      <span className={`text-xl ${isLoading && "opacity-50"}`}>{quantity}</span>
      <Button
        variant="outlined"
        onClick={() => updateQuantity("increase")}
        className="w-3 h-5"
        disabled={isLoading}
      >
        +
      </Button>
    </div>
  );
};
