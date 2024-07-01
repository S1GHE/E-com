import {ContainerModule, TextModule} from "@shared/styles";
import {Input} from "@shared/ui/input";
import {Button} from "@shared/ui/button";
import cls from "@pages/public/sign-in/style/SignIn.module.scss";
import {Logo} from "@shared/assets/icon";
import {Form} from "@shared/components/form";

export const SignIn = () => {
  return (
    <section className={ContainerModule.center_container}>
      <Form>
        <Logo className={cls.logo}/>


        <h1 className={TextModule.h32}>Регистрация</h1>

        <div className={cls.inputs}>
          <Input placeholder={"Логин"}/>
          <Input type={"password"} placeholder={"Пароль"}/>
          <Input type={"password"} placeholder={"Повторить пароль"}/>
        </div>

        <div className={cls.inputs}>
          <Button variant={"black"}>
            Зарегистрироваться
          </Button>

          <Button to={"/"}>
            Войти
          </Button>
        </div>
      </Form>
    </section>
  );
};