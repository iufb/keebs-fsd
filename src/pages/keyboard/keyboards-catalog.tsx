import { useKeyboardStore } from "src/entities/keyboard";
import { KeyboardSort } from "src/features/keyboard/sort";
import { PATH } from "src/shared/lib";
import { Card } from "src/shared/ui";
import { KeyboardFilterSidebar } from "src/widgets/keyboard";
import { useKeyboardsCatalog } from "./queries/use-keyboards-catalog";

export const KeyboardsCatalogPage = () => {
  useKeyboardsCatalog();
  const { keyboards } = useKeyboardStore((state) => ({
    keyboards: state.keyboards,
  }));
  return (
    <section className="w-full h-full collection-grid">
      {/* {isLoading && <div>laoding</div>} */}
      <KeyboardFilterSidebar />
      {keyboards && (
        <div className="col gap-2 items-end">
          <KeyboardSort />
          <div className="catalog">
            {keyboards.map((keyboard) => (
              <Card
                key={keyboard._id}
                to={PATH.keyboardDetails(keyboard._id)}
                name={keyboard.name}
                img={keyboard.images[0].image}
                rating={5}
                reviewCount={5}
                price={keyboard.price}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
