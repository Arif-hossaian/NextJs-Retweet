import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
} from "semantic-ui-react";

const OthersInputFields = ({
  user: { bio, facebook, youtube, instagram, twitter },
  handleChange,
  showSocialMediaLinks,
  setShowSocialMediaLinks,
}) => {
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />
      <Button
        content="Add Social Media Link ?"
        color="red"
        icon="at"
        type="button"
        onClick={() => setShowSocialMediaLinks(!showSocialMediaLinks)}
      />
      {showSocialMediaLinks && (
        <>
          <Divider />
          <Form.Input
            icon="facebook"
            iconPosition="left"
            name="facebook"
            value={facebook}
            onChange={handleChange}
          />
          <Form.Input
            icon="twitter"
            iconPosition="left"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />
          <Form.Input
            icon="instagram"
            iconPosition="left"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />
          <Form.Input
            icon="youtube"
            iconPosition="left"
            name="youtube"
            value={youtube}
            onChange={handleChange}
          />
          <Message
            icon="attention"
            info
            size="small"
            header="Social Media links are Optional"
          />
        </>
      )}
    </>
  );
};

export default OthersInputFields;
