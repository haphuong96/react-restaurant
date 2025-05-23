import React, { useState, InputHTMLAttributes } from "react";
import { Icon } from "../Icon/Icon";

type InputType = "text" | "password";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> {
  label?: string;
  type?: InputType;
  required?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const Input = (
  {
    label,
    type = "text",
    required,
    error,
    className = "",
    inputClassName = "",
    labelClassName = "",
    rightIcon,
    leftIcon,
    ...props
  }: InputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Determine the actual input type
  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className={`block mb-2 ${labelClassName}`}>
          {label}{" "}
          {required && <span className="text-primary-red-light">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            {leftIcon}
          </div>
        )}

        <input
          type={inputType}
          className={`w-full border border-gray-300 rounded p-2 ${
            error
              ? "border-red-500"
              : isFocused
              ? "border-primary-red"
              : "border-gray-300"
          } ${leftIcon ? "pl-10" : ""} ${
            rightIcon || type === "password" ? "pr-10" : ""
          } ${inputClassName}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            <div className="relative">
              <Icon name="password-visible" width={22} height={21} />
              {isPasswordVisible && (
                <span
                  className="absolute inset-0 before:absolute before:content-[''] before:left-1/2 before:top-1/2 before:w-[110%] before:h-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-700 before:rotate-45 before:rounded-full"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        )}

        {rightIcon && type !== "password" && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
