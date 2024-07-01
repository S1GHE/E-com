import {lazy} from "react";

export const AddProductChunk = lazy(
  () => import("@pages/private/add-product/ui/index").then(
    m => ({default: m.AddProduct})
  )
)