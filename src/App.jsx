import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Main from "./Conmponents/Main/Main";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <Main />
    </>
  );
}

export default App;
