import { Form, Header, Icon, Segment, Image } from "semantic-ui-react";

const DropImage = ({
  highLighted,
  setHighLighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
}) => {
  return (
    <>
      <Form.Field>
        <Segment placeholder basic secondary>
          <input
            style={{ display: "none" }}
            type="file"
            accept="/image/*"
            onChange={handleChange}
            name="media"
            ref={inputRef}
          />
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setHighLighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighLighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighLighted(true);
              //console.log(e.dataTransfer.files);
              const droppedFile = Array.from(e.dataTransfer.files);
              setMedia(droppedFile[0]);
              setMediaPreview(URL.createObjectURL(droppedFile[0]));
            }}
          >
            {mediaPreview === null ? (
              <>
                <Segment
                  color={highLighted ? "green" : "grey"}
                  placeholder
                  basic
                >
                  <Header icon>
                    <Icon
                      name="file image outline"
                      style={{ cursor: "pointer" }}
                      onClick={() => inputRef.current.click()}
                    />
                    Drag and Drop to upload image
                  </Header>
                </Segment>
              </>
            ) : (
              <>
                <Segment color="green" placeholder basic>
                  <Image
                    src={mediaPreview}
                    alt={mediaPreview}
                    size="medium"
                    style={{ cursor: "pointer" }}
                    onClick={() => inputRef.current.click()}
                  />
                </Segment>
              </>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
};

export default DropImage;
