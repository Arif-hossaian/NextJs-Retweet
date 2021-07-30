import { Form } from "semantic-ui-react";

const CustomFormInput = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  loading,
  error,
  icon,
  type,
  iconPosition
}) => {
  return (
    <Form.Input
      required
      label={label}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      loading={loading}
      error={error}
      fluid
      icon={icon}
      iconPosition={iconPosition}
      type={type || "text"}
    />
  );
}

export default CustomFormInput;
