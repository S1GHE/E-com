import {Button} from "@shared/ui/button";
import cls from "@features/product/list-item/styles/CardList.module.scss";
import {TextModule} from "@shared/styles";
import {FC} from "react";
import {ICard} from "@shared/types";

export const CardList:FC<ICard> = (props) => {
  const {
    title,
    description,
    price,
    imageUrl,
    onClick
  } = props;

  return (
    <div className={cls.list_container}>
      <div className={cls.list_img}>
        <img src={imageUrl} alt={title}/>
      </div>

      <div className={cls.list_body}>
        <div className={cls.list_body__head}>
          <h6 className={TextModule.h20}>{title}</h6>
          <p className={TextModule.p14}>{description}</p>
        </div>

        <p className={TextModule.p16__bold}>{price}</p>

        <Button variant={"outline"} onClick={onClick}>
          Удалить
        </Button>
      </div>
    </div>
  );
};