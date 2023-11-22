import { Button, Input } from "src/shared/ui";
import { useSignupForm } from "../queries/use-sign-up-form";

export const SignUpForm = () => {
  const { authData, handleInput, handleSignup, error, isLoading } =
    useSignupForm();
  return (
    <form onSubmit={handleSignup} className="col gap-3">
      <Input
        label="Username"
        inputProps={{
          placeholder: "Username",
        }}
        value={authData.username}
        onChange={handleInput}
      />
      <Input
        label="Email"
        type="email"
        inputProps={{ placeholder: "Email" }}
        value={authData.email}
        onChange={handleInput}
      />
      <Input
        label="Password"
        type="password"
        inputProps={{
          placeholder: "Password",
        }}
        value={authData.password}
        onChange={handleInput}
      />
      <span className="text-rose-500 h-5">{error}</span>
      <Button variant="primary" type="submit" disabled={isLoading}>
        Create
      </Button>
    </form>
  );
};
