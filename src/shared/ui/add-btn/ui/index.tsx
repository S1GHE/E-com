import {FC} from "react";
import {Link} from "react-router-dom";
import cls from "@shared/ui/add-btn/style/addBtn.module.scss";
import {TextModule} from "@shared/styles";
import {IAddBtn} from "@shared/ui/add-btn/types/addBtnTypes.ts";


export const AddBtn:FC<IAddBtn> = ({children, to}) => {
  if (to){
    return(
      <Link to={to} className={cls.addBtn}>
        <p className={TextModule.p16__bold}>
          {children}
        </p>
      </Link>
    )
  }

  return (
    <button className={cls.addBtn}>
      <p className={TextModule.p16__bold}>
        {children}
      </p>
    </button>
  )
};