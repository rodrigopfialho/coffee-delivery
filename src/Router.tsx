import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Success } from "./pages/success";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
      </Route>
    </Routes>
  )
}