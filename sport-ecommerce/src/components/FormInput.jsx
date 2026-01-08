import { useState } from "react";
import "./FormInput.css";

function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div
      className={`form-input-group ${error ? "error" : ""} ${
        focused ? "focused" : ""
      }`}
    >
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="input-wrapper">
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="form-input"
          required={required}
        />
        {type === "password" && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default FormInput;
