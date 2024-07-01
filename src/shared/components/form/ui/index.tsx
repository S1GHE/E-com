import {FC, FormEvent} from "react";
import {IForm} from "@shared/components/form/types/FormType.ts";
import cls from "@shared/components/form/style/form.module.scss";

export const Form:FC<IForm> = ({children}) => {
  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form className={cls.form_container} onSubmit={handlerSubmit}>
      {children}
    </form>
  );
};