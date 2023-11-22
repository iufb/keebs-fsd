import { Link } from "react-router-dom";
import { SignInForm } from "src/features/auth";
import { PATH } from "src/shared/lib";

export const SignInPage = () => {
  return (
    <section className="px-10">
      <h2 className="text-4xl font-bold font-roboto ">Login</h2>
      <SignInForm />
      <Link className="mt-3 inline-block link" to={PATH.signup}>
        Create account
      </Link>
    </section>
  );
};
