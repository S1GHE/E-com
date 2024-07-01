import cls from "@features/product/card/styles/Card.module.scss";
import {TextModule} from "@shared/styles";
import {Button} from "@shared/ui/button";
import {FC} from "react";
import {ICard} from "@shared/types";

export const Card:FC<ICard> = (props) => {
  const {
    title,
    description,
    price,
    imageUrl,
    onClick
  } = props;
  return (
    <div className={cls.card_container}>
      <div className={cls.card_img}>
        <img src={imageUrl} alt={title}/>
      </div>

      <div className={cls.card_body}>
        <h6 className={TextModule.h20}>{title}</h6>
        <span className={TextModule.p14}>{description}</span>
        <p className={TextModule.p16__bold}>{price}</p>
      </div>

      <Button onClick={onClick}>
        В корзину
      </Button>
    </div>
  );
};