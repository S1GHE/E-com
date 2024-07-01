import {lazy} from "react";

export const LoginChunk = lazy(
  () => import("@pages/public/login/Login").then(
    m => ({default: m.Login})
  )
)