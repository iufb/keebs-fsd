import { FC, useState } from "react";
import { useCartStore } from "src/entities/cart/store";
import { Loader, Radio } from "src/shared/ui";
import { useExtraKeycaps } from "./queries/use-extra-keycaps";
interface IAddExtraKeycaps {
  profile: string;
}
export const AddExtraKeycaps: FC<IAddExtraKeycaps> = ({ profile }) => {
  const { keycaps, isLoading, error } = useExtraKeycaps(profile);
  const { addToCart, removeFromCart } = useCartStore((state) => ({
    addToCart: state.addItem,
    removeFromCart: state.removeItem,
  }));
  const [selectedKeycaps, setSelectedKeycaps] = useState<string[]>([]);
  const addKeycap = (id: string) => {
    if (selectedKeycaps.includes(id)) {
      setSelectedKeycaps(selectedKeycaps.filter((keycap) => keycap !== id));
      removeFromCart(id);
      return;
    }
    addToCart({ productId: id, productType: "keycaps" });
    setSelectedKeycaps([...selectedKeycaps, id]);
  };
  const isSelected = (id: string) => {
    return selectedKeycaps.findIndex((k) => k == id) !== -1;
  };
  if (error) return <div>{error}</div>;
  if (isLoading) <Loader />;

  return (
    <>
      <h3 className="h3">Add Extra Keycaps</h3>
      <div className="grid gap-y-2">
        {keycaps &&
          keycaps.map(({ name, _id, price }) => {
            const selected = isSelected(_id);
            return (
              <Radio
                key={_id}
                price={`+ $${price} `}
                name={name}
                onClick={() => addKeycap(_id)}
                selected={selected}
              />
            );
          })}
      </div>
    </>
  );
};
