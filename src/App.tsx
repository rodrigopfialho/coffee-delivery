import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
// import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header/>
        {/* <Home/> */}
        <Cart />
    </ThemeProvider>
  )
}