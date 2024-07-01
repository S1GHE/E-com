import "@src/app/style/index.scss";
import {Suspense} from "react";
import {AppRoute} from "@src/pages";

export const App = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <AppRoute/>
    </Suspense>
  )
}

