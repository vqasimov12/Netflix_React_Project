import React from "react";

const FormInput = ({
  name,
  type,
  placeHolder,
  handleInputChange,
  inputStyle = "border p-2",
  value
}) => {
  return (
    <div className="flex flex-col ">
      <input
        className={inputStyle}
        defaultValue={value}
        type={type}
        name={name}
        onChange={(e) => {
          handleInputChange(e.target.name, e.target.value);
        }}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormInput;
