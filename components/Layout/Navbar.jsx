import { Menu, Container, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;
  return (
    <Menu fluid borderless style={{marginTop:"20px"}}>
      <Container text>
        <Link href="/login" passHref={true}>
          <Menu.Item header active={isActive("/login")} position="right">
            <Icon size="large" name="sign in" />
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup" passHref={true}>
          <Menu.Item header active={isActive("/signup")} position="left">
            <Icon size="large" name="signup" />
            Sign up
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

export default Navbar;
