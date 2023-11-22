import { Link } from "react-router-dom";
import { SignUpForm } from "src/features/auth";
import { PATH } from "src/shared/lib";

export const SignUpPage = () => {
  return (
    <section className="px-10">
      <h2 className="text-[42px] font-bold font-roboto ">Create Account</h2>
      <SignUpForm />
      <Link className="mt-3 inline-block link" to={PATH.signin}>
        Already have account? Sign in!
      </Link>
    </section>
  );
};
