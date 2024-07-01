import {lazy} from "react";

export const ProductsChunk = lazy(
  () => import("@pages/private/products/ui/index.tsx").then(
    m => ({default: m.Products})
  )
)