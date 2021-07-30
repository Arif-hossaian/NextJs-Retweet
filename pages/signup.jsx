import { FooterMsg, HeaderMsg } from "../components/Common/WelcomeMsg";
import { useState, useEffect, useRef } from "react";
import { Form, Button, Message, Segment, Divider } from "semantic-ui-react";
import CustomFormInput from "../components/custom/CustomeFormInput";
import OthersInputFields from "../components/Common/OthersInputFields";
import DropImage from "../components/Common/DropImage";
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });
  const [showSocialMediaLinks, setShowSocialMediaLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [userName, setUserName] = useState("");
  const [userNameLoading, setUserNameLoading] = useState(false);
  const [userNameAvailable, setUserNameAvailable] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highLighted, setHighLighted] = useState(false);
  const inputRef = useRef();
  const { name, email, password, bio } = user;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    const isUser = Object.values({ name, email, password, bio }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
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
          <DropImage
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            setMedia={setMedia}
            inputRef={inputRef}
            highLighted={highLighted}
            setHighLighted={setHighLighted}
            handleChange={handleChange}
          />
          <CustomFormInput
            label="Enter your Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />
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
          <CustomFormInput
            loading={userNameLoading}
            error={!userNameAvailable}
            label="Enter your User Name"
            placeholder="UserName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              if (regexUserName.test(e.target.value)) {
                setUserNameAvailable(true);
              } else {
                setUserNameAvailable(false);
              }
            }}
            icon={userNameAvailable ? "check" : "close"}
            iconPosition="left"
          />
          <OthersInputFields
            user={user}
            showSocialMediaLinks={showSocialMediaLinks}
            setShowSocialMediaLinks={setShowSocialMediaLinks}
            handleChange={handleChange}
          />
          <Divider hidden />
          <Button
            icon="signup"
            content="Signup"
            type="submit"
            color="teal"
            disabled={submitDisabled || !userNameAvailable}
          />
        </Segment>
      </Form>
      <FooterMsg />
    </>
  );
};

export default Signup;
