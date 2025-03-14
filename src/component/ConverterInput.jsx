import React from "react";

const ConverterInput = ({
  label,
  value,
  placeholder,
  onChange,
  unit,
  setter,
}) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        onChange={(e) => onChange(e.target.value, unit, setter)}
        value={value}
        type="text"
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default ConverterInput;
