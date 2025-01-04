import React from "react";
import FormInput from "common/components/FormInput";
import { button } from "motion/react-client";

const Form = ({
  headerText,
  formItems,
  setFormData,
  formButtons,
  formStyle,
}) => {
  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={formStyle}
    >
      {headerText && <h1 className={headerText.style}>{headerText.title}</h1>}
      {formItems.map((formItem) => (
        <FormInput
          value={formItem?.value}
          name={formItem.name}
          type={formItem.type}
          placeHolder={formItem.placeHolder}
          handleInputChange={handleInputChange}
          inputStyle={formItem.inputStyle}
        />
      ))}
      {formButtons.map((formButton) => (
        <button onClick={formButton.action} className={formButton.style}>
          {formButton.title}
        </button>
      ))}
    </form>
  );
};

export default Form;
