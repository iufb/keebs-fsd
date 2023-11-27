import { FC, useState } from "react";
import { Capitalize } from "src/shared/lib/utils";
import { Option } from "src/shared/ui";
import { useSwitchPick } from "./queries/use-switch-pick";

interface ISwitchPick {
  profile: string;
}
export const SwitchPick: FC<ISwitchPick> = ({ profile }) => {
  const { switches, isLoading, error } = useSwitchPick(profile);
  const [selected, setSelected] = useState(0);
  if (error) return <div>{error}</div>;
  //TODO: Loading
  if (isLoading) return <div>...olaoign</div>;
  return (
    <>
      <h3 className="h3">{`${Capitalize(profile)}-Profile Switch`}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {switches &&
          switches.map((s, idx) => (
            <Option
              key={s._id}
              name={s.name}
              onClick={() => setSelected(idx)}
              selected={idx == selected}
            />
          ))}
      </div>
    </>
  );
};
