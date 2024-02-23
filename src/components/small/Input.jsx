import React, { useEffect, useState } from "react";

const Input = ({
  label,
  defaultValue,
  onchange,
  classLabel,
  type="text",
  field=null,
  classParent,
  className,
  placeholder,
  autoFocus=false,
  require=false,
  footer,
  classFooter
}) => {
  const [value, setValue] = useState(defaultValue);
  const handelChange = (e) => {
    setValue((prev) => e.target.value);
    onchange(field,e.target.value);
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={classParent}>
      {label && <label className={classLabel}> {label} </label>}
      <input
        placeholder={placeholder}
        className={className}
        type={type}
        id={field}
        name={field}
        value={value}
        onChange={handelChange}
        autoFocus={autoFocus}
        required={require}
      />
      {footer &&  <div id="emailHelp" class={"form-text "+classFooter}>{footer}</div>}
    </div>
  );
};

export default Input;
