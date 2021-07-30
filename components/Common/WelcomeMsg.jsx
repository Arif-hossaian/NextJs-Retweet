import { Divider, Icon, Message } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMsg = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <Message
      color="teal"
      attached
      header={signupRoute ? "Get started" : "welcome back"}
      icon={signupRoute ? "setting" : "privacy"}
      size="small"
      content={
        signupRoute ? "Create new Account" : "Login with email & password"
      }
    />
  );
};
export const FooterMsg = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Existing User? <Link href="/login"> Login here instead</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" info>
            <Icon name="lock" />
            <Link href="/reset">Forgot your password?</Link>
          </Message>
          <Message attached="bottom" warning>
            <Icon name="help" />
            New User? <Link href="/signup">Signup here</Link> Instead{" "}
          </Message>
        </>
      )}
    </>
  );
};
