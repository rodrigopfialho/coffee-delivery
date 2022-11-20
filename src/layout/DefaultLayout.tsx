import { Header } from "../components/Header";
import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}