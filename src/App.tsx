import "./App.css";

import { ITheme, ThemeProvider } from "@fluentui/react";
import React, { useState } from "react";

import { Card } from "./Components/Card/Card";
import { CardSecondaryText } from "./Components/Card/CardSecondaryText";
import { ThemePicker } from "./utils/Theme/ThemePicker";
import { ThemeSlots } from "./utils/Theme/ThemeSlots";

function App() {
  const [theme, setTheme] = useState<ITheme>();
  return (
    <div className="App">
      <ThemePicker onThemeChanged={(theme) => setTheme(theme)} />
      <ThemeProvider theme={theme} applyTo="body">
        <h1>Testing 2</h1>
        <div>
          <Card>
            <CardSecondaryText
              text={`Testing Hello world with more text Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Voluptate aliquam cum modi veritatis
              sequi quasi sit. Soluta ullam natus quod nulla voluptatum
              corporis, sunt, velit iure esse sed accusantium tempore?`}
            ></CardSecondaryText>
          </Card>
        </div>

        <ThemeSlots />
      </ThemeProvider>
    </div>
  );
}

export default App;
