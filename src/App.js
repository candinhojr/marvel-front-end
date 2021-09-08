import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Routes from "./routes";
import AppTheme from "./theme/appTheme";
import Header from "./components/Header";

const applyTheme = createTheme(AppTheme);

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={applyTheme}>
        <Header />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
