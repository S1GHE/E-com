import {ContainerModule} from "@shared/styles";
import cls from "@shared/components/header/styles/Header.module.scss";
import {useState} from "react";
import {LinkList} from "@shared/components/header/ui/LinkList.tsx";
import {Logo} from "@shared/assets/icon";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // todo решить вопрос со строкой, через classnames
  return (
    <header className={`${ContainerModule.container} ${cls.header}`}>
      <Logo/>

      <div className={cls.header__link_list}>
        <LinkList/>
      </div>

      <button className={cls.header__burger_btn} onClick={() => setIsActive(!isActive)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             viewBox="0 0 16 16">
          <path fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>

      {isActive && <div className={cls.header__burger}>
        <LinkList/>
      </div>}
    </header>
  );
};