import {lazy} from "react";

export const ProfileChunk = lazy(
  () => import("@pages/private/profile/ui/index").then(
    m => ({default: m.Profile})
  )
)