import { useParams } from "react-router-dom";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { AddToWishlistButton } from "src/features/wishlist/add-to-wishlist-button";
import { Loader } from "src/shared/ui";
import { ImageGallery } from "src/widgets/image-gallery";
import { useKeycapDetails } from "./queries/use-keycap-details";

export const KeycapPage = () => {
  const { id } = useParams();
  if (!id) return <div>error</div>;
  const { keycapDetails, isLoading, error } = useKeycapDetails(id);
  return (
    <div>
      {isLoading && <Loader />}
      {keycapDetails && (
        <main className="pageLayout">
          <ImageGallery images={keycapDetails.images} />
          <div className="col gap-3">
            <h1 className="text-[42px] font-bold font-roboto">
              {keycapDetails.name}
            </h1>
            <span className="text-2xl">${keycapDetails.price}</span>
            <AddToWishlistButton
              type="base"
              productId={keycapDetails._id}
              productType="keycaps"
            />
            <AddToCartButton
              type="base"
              productId={keycapDetails._id}
              productType="keycaps"
            />
          </div>
        </main>
      )}

      {error && <div>Error {error.response.data.message}</div>}
    </div>
  );
};
