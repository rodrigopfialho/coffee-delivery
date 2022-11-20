import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Home } from "./pages/home"

import { GlobalStyles } from "./styles/global"
import { defaultThemes } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
    
  )
}

export default App
