import {lazy} from "react";

export const SignInChunk = lazy(
  () => import("@pages/public/sign-in/SignIn").then(
    m => ({default: m.SignIn})
  )
)