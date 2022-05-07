import { Stack, StackItem, Text, useTheme } from "@fluentui/react";

import React from "react";

const themeSlots = [
  "themeDarker",
  "themeDark",
  "themeDarkAlt",
  "themePrimary",
  "themeSecondary",
  "themeTertiary",
  "themeLight",
  "themeLighter",
  "themeLighterAlt",
  "black",
  "blackTranslucent40",
  "neutralDark",
  "neutralPrimary",
  "neutralPrimaryAlt",
  "neutralSecondary",
  "neutralSecondaryAlt",
  "neutralTertiary",
  "neutralTertiaryAlt",
  "neutralQuaternary",
  "neutralQuaternaryAlt",
  "neutralLight",
  "neutralLighter",
  "neutralLighterAlt",
  "white",
  "whiteTranslucent40",
  "accent",
] as const;

export const ThemeSlots: React.FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Stack horizontal wrap>
      {themeSlots.map((slot) => (
        <StackItem
          style={{
            padding: "10px",
            margin: "5px",
          }}
        >
          <div
            style={{
              padding: "50px",
              margin: "5px",
              background: `${theme.palette[slot]}`,
            }}
          ></div>
          <Text>{slot}</Text>
        </StackItem>
      ))}
    </Stack>
  );
};
