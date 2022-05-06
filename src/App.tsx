import "./App.css";

import { ITheme, ThemeProvider } from "@fluentui/react";
import React, { useState } from "react";

import { ThemePicker } from "./utils/Theme/ThemePicker";

function App() {
  const [theme, setTheme] = useState<ITheme>();
  return (
    <div className="App">
      <ThemePicker onThemeChanged={(theme) => setTheme(theme)} />
      <ThemeProvider theme={theme} applyTo="body">
        <h1>Testing 2</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
