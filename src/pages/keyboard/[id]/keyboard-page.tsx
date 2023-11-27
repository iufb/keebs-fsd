import { useParams } from "react-router-dom";
import { AddExtraKeycaps } from "src/features/keyboard/add-extra-keycaps";
import { ColorPick } from "src/features/keyboard/color-pick";
import { SwitchPick } from "src/features/keyboard/switch-pick";
import { ImageGallery } from "src/widgets/image-gallery";
import { useKeyboardDetails } from "./queries/use-keyboard-details";

export const KeyboardPage = () => {
  const { id } = useParams();
  if (!id) return <div>error</div>;
  const { keyboardDetails, isLoading, error } = useKeyboardDetails(id);
  return (
    <div>
      {/* TODO:loading */}
      {isLoading && <div>Loaidng</div>}
      {keyboardDetails && (
        <main className="flex gap-x-20">
          <ImageGallery images={keyboardDetails.images} />
          <div className="col gap-3">
            <h1 className="text-[42px] font-bold font-roboto">
              {keyboardDetails.name}
            </h1>
            <p className="text-lg text-gray-500">
              {keyboardDetails.description}
            </p>
            <span className="text-2xl">${keyboardDetails.price}</span>
            {keyboardDetails.colors.length > 0 ? (
              <ColorPick colors={keyboardDetails.colors} />
            ) : (
              <></>
            )}
            <SwitchPick profile={keyboardDetails.profile} />
            <AddExtraKeycaps profile={keyboardDetails.profile} />
          </div>
        </main>
      )}

      {error && <div>Error {error.response.data.message}</div>}
    </div>
  );
};
