import {FC} from "react";
import {ISummary} from "@features/product/summary/types/SummaryType.ts";
import {Button} from "@shared/ui/button";
import {TextModule} from "@shared/styles";
import cls from "@features/product/summary/styles/summary.module.scss";

export const Summary: FC<ISummary> = (props) => {
  const {
    itemCount, totalAmount, onPay
  } = props;

  return (
    <div className={cls.container}>
      <p className={TextModule.p16}>К покупке:&nbsp;
        <span className={TextModule.p16__bold}>{itemCount} товара</span>
      </p>

      <div className={cls.text}>
        <p className={TextModule.p16__bold}>Итого:</p>
        <h4 className={TextModule.h32}>{totalAmount} руб</h4>
      </div>

      <Button variant={"black"} onClick={onPay}>
        Оплатить
      </Button>
    </div>
  );
};