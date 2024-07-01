import cls from "@shared/components/header/styles/LinkList.module.scss";
import {PrivatePaths} from "@shared/navigation";
import {Button} from "@shared/ui/button";

export const LinkList = () => {
  return (
    <div className={cls.links}>
      <Button to={PrivatePaths.PRODUCTS}>
        Продукты
      </Button>
      <Button to={PrivatePaths.PROFILE}>
        Профиль
      </Button>
      <Button variant={"black"} to={PrivatePaths.BASKET}>
        Корзина
      </Button>
      <Button variant={"outline"}>
        Выйти
      </Button>
    </div>
  );
};