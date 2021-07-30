import { FooterMsg, HeaderMsg } from "../components/Common/WelcomeMsg";
import { useState, useEffect } from "react";
import { Form, Button, Message, Segment, Divider } from "semantic-ui-react";
import CustomFormInput from "../components/custom/CustomeFormInput";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    const isUser = Object.values({ email, password }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div>
      <HeaderMsg />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
        <Segment>
          <CustomFormInput
            label="Enter your Email"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            icon="envelope"
            iconPosition="left"
          />
          <CustomFormInput
            label="Enter your Password"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="right"
          />
          <Divider hidden />
          <Button
            icon="signup"
            content="Login"
            type="submit"
            color="teal"
            disabled={submitDisabled}
          />
        </Segment>
      </Form>
      <FooterMsg />
    </div>
  );
};

export default Login;
