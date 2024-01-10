import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'
import Header from "./Compoments/Header/Header";
import DashBoard from "./Compoments/dashboard/Dashboard";
import SideBar from "./Compoments/SideBar/SideBar";

function App() {
  const [ theme,colorMode] = useMode();

  return ( <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
    <div className="app">
      <main className="content">
        <Header/>
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
        </Routes>
      </main>
    </div>
  </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
