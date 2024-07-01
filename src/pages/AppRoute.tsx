import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "@widgets/layouts";
import {PrivatePaths, PublicPaths} from "src/shared/navigation";
import {BasketChunk} from "@pages/private/basket";
import {AddProductChunk} from "@pages/private/add-product";
import {ProfileChunk} from "@pages/private/profile";
import {ProductsChunk} from "@src/pages/private/products";
import {LoginChunk} from "@pages/public/login";
import {SignInChunk} from "@pages/public/sign-in";
import {ReactNode} from "react";

export interface IRoute {
  path: string;
  element: ReactNode
}

export const AppRoute = () => {
  const PrivateRoutes:Array<IRoute> = [
    {path: PrivatePaths.BASKET, element: <BasketChunk/>},
    {path: PrivatePaths.ADD_PRODUCT, element: <AddProductChunk/>},
    {path: PrivatePaths.PROFILE, element: <ProfileChunk/>},
    {path: PrivatePaths.PRODUCTS, element: <ProductsChunk/>},
  ]

  const PublicRoutes: Array<IRoute> = [
    {path: PublicPaths.LOGIN, element: <LoginChunk/>},
    {path: PublicPaths.SIGN_IN, element: <SignInChunk/>}
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          {PrivateRoutes.map((el) =>
              <Route key={el.path} path={el.path} element={el.element}/>
            )}
        </Route>

        {PublicRoutes.map((el) =>
          <Route key={el.path} path={el.path} element={el.element}/>
        )}
      </Routes>
    </BrowserRouter>
  );
};