import {ContainerModule, TextModule} from "@shared/styles";
import {Input} from "@shared/ui/input";
import {Button} from "@shared/ui/button";
import cls from "@pages/public/login/style/login.module.scss";
import {PublicPaths} from "@shared/navigation";
import {Logo} from "@shared/assets/icon";
import {Form} from "@shared/components/form";

export const Login = () => {
  return (
    <section className={ContainerModule.center_container}>
      <Form>
        <Logo className={cls.logo}/>

        <h1 className={TextModule.h32}>Вход</h1>

        <div className={cls.inputs}>
          <Input placeholder={"Логин"}/>
          <Input type={"password"} placeholder={"Пароль"}/>
        </div>

        <div className={cls.bottom}>
          <div className={cls.bottom__btn}>
            <Button variant={"black"}>
              Войти
            </Button>
            <Button to={PublicPaths.SIGN_IN} variant={"outline"}>
              Регистрация
            </Button>
          </div>

          <Button>
            Забыли пароль
          </Button>
        </div>
      </Form>
    </section>
  );
};