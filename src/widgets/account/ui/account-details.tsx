import { Error, Loader } from "src/shared/ui";
import { useGetAccount } from "../queries/use-get-account";

export const AccountDetails = () => {
  const { accountDetails, isLoading, error } = useGetAccount();
  return (
    <div className="col gap-3">
      <h2 className="h2">Account details</h2>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      <span className="font-bold">{accountDetails?.username}</span>
      <span>Email : {accountDetails?.email}</span>
    </div>
  );
};
