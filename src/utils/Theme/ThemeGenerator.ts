/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All Rights Reserved.
-------------------------------------------------------------------------------------------- */

import {
    BaseSlots,
    Theme,
    ThemeGenerator,
    createTheme,
    getColorFromString,
    isDark,
    themeRulesStandardCreator
} from "@fluentui/react";

import { defaultLightTheme } from "./theme";

/**
 * Given the following properties, generate a Fluent Theme
 * @param primaryColor accent color (Buttons)
 * @param textColor font color
 * @param backgroundColor background
 * @returns Theme
 */
export function generateTheme(
    primaryColor: string,
    textColor: string,
    backgroundColor: string
): Theme {
    const themeRules = themeRulesStandardCreator();

    const themePrimaryColor = getColorFromString(primaryColor || "#0078d4");
    const themeTextColor = getColorFromString(textColor || "#323130");
    const themeBackgroundColor = getColorFromString(
        backgroundColor || "#ffffff"
    );

    if (!themePrimaryColor || !themeTextColor || !themeBackgroundColor) {
        return defaultLightTheme;
    }

    const isDarkTheme = isDark(themeBackgroundColor);

    ThemeGenerator.insureSlots(themeRules, isDarkTheme);

    ThemeGenerator.setSlot(
        themeRules[BaseSlots[BaseSlots.primaryColor]],
        themePrimaryColor,
        isDarkTheme,
        true,
        true
    );
    ThemeGenerator.setSlot(
        themeRules[BaseSlots[BaseSlots.foregroundColor]],
        themeTextColor,
        isDarkTheme,
        true,
        true
    );
    ThemeGenerator.setSlot(
        themeRules[BaseSlots[BaseSlots.backgroundColor]],
        themeBackgroundColor,
        isDarkTheme,
        true,
        true
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const themeAsJson: {
        [key: string]: string;
    } = ThemeGenerator.getThemeAsJson(themeRules);

    const finalTheme = createTheme({
        ...{ palette: themeAsJson },
        isInverted: isDarkTheme
    });

    // Apply some slight customizations around the default logic
    // For menu items the default tends to blend in with backgrounds, so make it "lighter"
    finalTheme.semanticColors.menuBackground =
        finalTheme.palette.neutralLighterAlt;

    // MessageBar isn't "theme color" aware, if the bg is blue its still is rendered as a dark gray. This overwrites that to make it look better
    finalTheme.semanticColors.infoBackground = finalTheme.isInverted
        ? finalTheme.palette.neutralLight
        : finalTheme.palette.whiteTranslucent40;

    finalTheme.semanticColors.inputBackground = "transparent";
    return finalTheme;
}
