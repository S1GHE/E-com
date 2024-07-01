import {ContainerModule, TextModule} from "@shared/styles";
import { Form } from "@src/shared/components/form";
import { Button } from "@src/shared/ui/button";
import { Input } from "@shared/ui/input";
import cls from  "@pages/private/add-product/styles/add-product.module.scss";

export const AddProduct = () => {
  return (
    <section className={ContainerModule.center_container}>
      <Form>
        <h1 className={TextModule.h32}>Новый продукт</h1>

        <div className={cls.files}>
            <p className={TextModule.p16__bold}>Добавить фото<br/>+</p>
        </div>

        <div className={cls.inputs}>
            <Input placeholder={"Название"}/>
            <Input placeholder={"Опсиание"}/>
            <Input placeholder={"Цена"}/>
        </div>

        <Button variant={"black"}>
            Добавить
        </Button>
      </Form>
    </section>
  );
};