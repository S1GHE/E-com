import {FC} from "react";
import {IButton} from "@shared/ui/button/type/ButtonType.ts";
import classNames from 'classnames';
import cls from "@shared/ui/button/style/button.module.scss";
import {Link} from "react-router-dom";

export const Button:FC<IButton> = (props) => {
  const {
    children,
    to,
    variant ="text",
    onClick
  } = props;

  const btnClass = classNames(cls.btn, {
    [cls.text]: variant === "text",
    [cls.outline]: variant === "outline",
    [cls.black]: variant === "black"
  })


  if (to){
    return (
      <Link onClick={onClick} to={to} className={btnClass}>
        {children}
      </Link>
    )
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  )
};