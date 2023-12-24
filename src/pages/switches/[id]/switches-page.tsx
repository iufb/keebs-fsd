import { useParams } from "react-router-dom";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { AddToWishlistButton } from "src/features/wishlist/add-to-wishlist-button";
import { Loader } from "src/shared/ui";
import { ImageGallery } from "src/widgets/image-gallery";
import { useSwitchesDetails } from "./queries/use-switches-details";

export const SwitchesPage = () => {
  const { id } = useParams();
  if (!id) return <div>error</div>;
  const { switchesDetails, isLoading, error } = useSwitchesDetails(id);
  return (
    <div>
      {isLoading && <Loader />}
      {switchesDetails && (
        <main className="grid lg:grid-cols-2 grid-cols-1 px-5 gap-x-4">
          <ImageGallery images={switchesDetails.images} />
          <div className="col gap-3 ">
            <h1 className="h1 font-bold font-roboto">
              {switchesDetails.name}
            </h1>
            <span className="text-2xl">${switchesDetails.price}</span>
            <AddToWishlistButton
              type="base"
              productId={switchesDetails._id}
              productType="keycaps"
            />
            <AddToCartButton
              type="base"
              productId={switchesDetails._id}
              productType="keycaps"
            />
          </div>
        </main>
      )}

      {error && <div>Error {error.response.data.message}</div>}
    </div>
  );
};
