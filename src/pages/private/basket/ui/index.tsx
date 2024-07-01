import {ContainerModule, TextModule} from "@shared/styles";
import {CardList} from "@features/product/list-item";
import {CardPng} from "@shared/assets/img";
import cls from "@pages/private/basket/styles/basket.module.scss";
import {Summary} from "@features/product/summary";

export const Basket = () => {
  const cards = Array.from({length: 3}, (_, index) => {
    return(
      <CardList
        key={index}
        title={`Name ${index + 1}`}
        description={"Desc"}
        price={2000}
        imageUrl={CardPng}
      />
    )
  })

  return (
    <section className={ContainerModule.container}>
      <h1 className={TextModule.h32}>Корзина</h1>

      <div className={cls.content}>
        <div className={cls.content__cards}>
          {cards}
        </div>

        <Summary itemCount={3} totalAmount={6000} onPay={() => {}}/>
      </div>
    </section>
  );
};