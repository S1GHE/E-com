import cls from "@shared/ui/input/styles/input.module.scss";
import {FC} from "react";
import {IInput} from "@shared/ui/input/types/InputType.ts";

export const Input:FC<IInput> = (props) => {
  const {
    placeholder,
    type="text",
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cls.input}
    />
  );
};