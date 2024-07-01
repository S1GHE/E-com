import {FC} from "react";
import cls from "@shared/components/grid/style/grid.module.scss";
import {IGrid} from "@shared/components/grid/types/GridType.ts";

export const Grid: FC<IGrid> = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={cls.grid_container}>
      {children}
    </div>
  );
};