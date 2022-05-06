import { DefaultButton, ITheme } from "@fluentui/react";
import {
  blueTheme,
  darkTheme,
  defaultLightTheme,
  grayLightTheme,
} from "./theme";

import React from "react";

export const ThemePicker: React.FunctionComponent<{
  onThemeChanged(theme: ITheme | undefined): void;
}> = (props: { onThemeChanged(theme: ITheme | undefined): void }) => {
  return (
    <div>
      <DefaultButton onClick={() => props.onThemeChanged(defaultLightTheme)}>
        Default Theme
      </DefaultButton>

      <DefaultButton onClick={() => props.onThemeChanged(grayLightTheme)}>
        Gray Light Theme
      </DefaultButton>

      <DefaultButton onClick={() => props.onThemeChanged(darkTheme)}>
        Dark Theme
      </DefaultButton>

      <DefaultButton onClick={() => props.onThemeChanged(blueTheme)}>
        Blue Theme
      </DefaultButton>
    </div>
  );
};
