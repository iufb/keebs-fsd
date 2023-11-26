import { useParams } from "react-router-dom";
import { ImageGallery } from "src/widgets/image-gallery";
import { useSwitchesDetails } from "./queries/use-switches-details";

export const SwitchesPage = () => {
  const { id } = useParams();
  if (!id) return <div>error</div>;
  const { switchesDetails, isLoading, error } = useSwitchesDetails(id);
  return (
    <div>
      {/* TODO:loading */}
      {isLoading && <div>Loaidng</div>}
      {switchesDetails && (
        <main className="flex gap-x-20">
          <ImageGallery images={switchesDetails.images} />
          <div className="col gap-3">
            <h1 className="text-[42px] font-bold font-roboto">
              {switchesDetails.name}
            </h1>
            <span className="text-2xl">${switchesDetails.price}</span>
          </div>
        </main>
      )}

      {error && <div>Error {error.response.data.message}</div>}
    </div>
  );
};
