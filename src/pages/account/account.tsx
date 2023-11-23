import { SignOutButton } from "src/features/auth";
import { AccountDetails } from "src/widgets/account";

export const AccountPage = () => {
  return (
    <section>
      <div className="flex mb-10">
        <h1 className="h1 w-full">My Account</h1>
        <SignOutButton />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-3xl font-bold">Order History</h2>
          <span>You haven't placed any orders yet.</span>
        </div>
        <AccountDetails />
      </div>
    </section>
  );
};
