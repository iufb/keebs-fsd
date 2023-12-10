import { Loader } from "src/shared/ui";
import { useGetAccount } from "../queries/use-get-account";

export const AccountDetails = () => {
  const { data, isLoading } = useGetAccount();
  return (
    <div className="col gap-3">
      <h2 className="h2">Account details</h2>
      {isLoading && <Loader />}
      <span className="font-bold">{data?.username}</span>
      <span>Email : {data?.email}</span>
    </div>
  );
};
