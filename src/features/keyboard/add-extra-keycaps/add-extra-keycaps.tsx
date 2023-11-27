import { FC, useState } from "react";
import { Checkbox, Radio } from "src/shared/ui";
import { useExtraKeycaps } from "./queries/use-extra-keycaps";
interface IAddExtraKeycaps {
  profile: string;
}
export const AddExtraKeycaps: FC<IAddExtraKeycaps> = ({ profile }) => {
  const { keycaps, isLoading, error } = useExtraKeycaps(profile);
  const [selectedKeycaps, setSelectedKeycaps] = useState<string[]>([]);
  const addKeycap = (id: string) => {
    if (selectedKeycaps.includes(id)) {
      setSelectedKeycaps(selectedKeycaps.filter((keycap) => keycap !== id));
      return;
    }
    setSelectedKeycaps([...selectedKeycaps, id]);
  };
  const isSelected = (id: string) => {
    return selectedKeycaps.findIndex((k) => k == id) !== -1;
  };
  if (error) return <div>{error}</div>;
  //TODO: Loading
  if (isLoading) return <div>...olaoign</div>;

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
