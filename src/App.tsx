import "./App.css";

import { ITheme, Stack, ThemeProvider } from "@fluentui/react";
import React, { useState } from "react";

import { Card as AdoCard } from "azure-devops-ui/Card";
import { Card } from "./Components/Card/Card";
import { ThemePicker } from "./utils/Theme/ThemePicker";
import { ThemeSlots } from "./utils/Theme/ThemeSlots";

function App() {
  const [theme, setTheme] = useState<ITheme>();
  return (
    <div className="App">
      <ThemePicker onThemeChanged={(theme) => setTheme(theme)} />
      <ThemeProvider theme={theme} applyTo="body">
        <h1>Testing 2</h1>
        <div style={{ margin: "10px" }}>
          <Stack horizontal wrap gap={"20px"}>
            <AdoCard titleProps={{ text: "title" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              perspiciatis accusantium quisquam sapiente nam iusto nisi ducimus
              atque corrupti cupiditate? Sed voluptatum molestiae aut, in
              ducimus quas tenetur labore fugiat?
            </AdoCard>

            <Card title={"title"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              perspiciatis accusantium quisquam sapiente nam iusto nisi ducimus
              atque corrupti cupiditate? Sed voluptatum molestiae aut, in
              ducimus quas tenetur labore fugiat?
            </Card>
          </Stack>
        </div>

        <ThemeSlots />
      </ThemeProvider>
    </div>
  );
}

export default App;
