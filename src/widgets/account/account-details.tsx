import { useGetAccount } from "./use-get-account";

export const AccountDetails = () => {
  const { data, isLoading } = useGetAccount();
  return (
    <div className="col gap-3">
      <h2 className="h2">Account details</h2>
      {/* TODO: loading */}
      {isLoading && <div>loaidng..</div>}
      <span className="font-bold">{data?.username}</span>
    </div>
  );
};
