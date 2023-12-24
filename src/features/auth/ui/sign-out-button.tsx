import { Button } from "src/shared/ui";
import { useSignOut } from "../queries/use-sign-out";

export const SignOutButton = () => {
  const { signout } = useSignOut();
  return (
    <Button
      variant="outlined"
      onClick={() => signout()}
      className="underline !text-sm  font-normal max-w-fit"
    >
      Sign out
    </Button>
  );
};
