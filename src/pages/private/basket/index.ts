import {lazy} from "react";

export const BasketChunk = lazy(
  () => import("@pages/private/basket/ui/index.tsx").then(
    m => ({default: m.Basket})
  )
)