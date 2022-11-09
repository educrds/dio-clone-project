import React from "react";
import {
  IconContainer,
  InputContainer,
  InputText,
  ErrorMessage,
} from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      <div>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </div>
    </>
  );
};

export { Input };
