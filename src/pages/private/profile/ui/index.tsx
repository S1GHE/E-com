import {ContainerModule, TextModule} from "@shared/styles";
import cls from "@pages/private/profile/style/profile.module.scss";

export const Profile = () => {
  return (
    <section className={ContainerModule.container}>
      <h1 className={TextModule.h32}>Профиль пользователя</h1>

      <div className={cls.text_contain}>
        <p className={TextModule.p16}>Имя:&nbsp;
            <span className={TextModule.p16__bold}>Name</span>
        </p>
        <p className={TextModule.p16}>Login:&nbsp;
            <span className={TextModule.p16__bold}>Login</span>
        </p>
        <p className={TextModule.p16}>Пароль:&nbsp;
            <span className={TextModule.p16__bold}>Password</span>
        </p>
      </div>
    </section>
  );
};