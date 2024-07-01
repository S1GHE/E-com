import {Navigate, Outlet} from "react-router-dom";
import {Header} from "@shared/components/header";

export const Layout = () => {
  const auth = true;

  return auth ? <><Header/><Outlet/></> : <Navigate to={"/"}/>
};