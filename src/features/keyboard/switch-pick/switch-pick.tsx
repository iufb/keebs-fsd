import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Capitalize } from "src/shared/lib/utils";
import { Loader, Option } from "src/shared/ui";
import { useSwitchPick } from "./queries/use-switch-pick";

interface ISwitchPick {
  profile: string;
}
export const SwitchPick: FC<ISwitchPick> = ({ profile }) => {
  const { switches, isLoading, error } = useSwitchPick(profile);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get("switch"));
  const selectSwitches = (name: string) => {
    searchParams.set("switch", name);
    setSearchParams(searchParams);
    setSelected(name);
  };
  if (error) return <div>{error}</div>;
  if (isLoading) return <Loader />;
  return (
    <>
      <h3 className="h3">{`${Capitalize(profile)}-Profile Switch`}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {switches &&
          switches.map((s) => (
            <Option
              key={s._id}
              name={s.name}
              onClick={() => selectSwitches(s.name)}
              selected={s.name == selected}
            />
          ))}
      </div>
    </>
  );
};
