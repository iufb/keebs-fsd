import { Button, Input } from "src/shared/ui";
import { useSigninForm } from "../queries/use-sign-in-form";

export const SignInForm = () => {
  const { authData, handleInput, handleSignin, error, isLoading } =
    useSigninForm();
  return (
    <form onSubmit={handleSignin} className="col gap-3">
      <Input
        inputProps={{ placeholder: "Email" }}
        label="Email"
        type="email"
        value={authData.email}
        onChange={handleInput}
      />
      <Input
        inputProps={{ placeholder: "Password" }}
        type="password"
        label="Password"
        value={authData.password}
        onChange={handleInput}
      />
      <span className="text-rose-500">{error}</span>
      <Button
        disabled={isLoading}
        variant="primary"
        className="uppercase "
        type="submit"
      >
        Sign in
      </Button>
    </form>
  );
};
