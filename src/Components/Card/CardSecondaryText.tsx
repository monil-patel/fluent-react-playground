import { Text, useTheme } from "@fluentui/react";
import * as React from "react";

interface ICardSecondaryText {
  /**
   * Text to render as secondary text
   */
  readonly text: string;

  /**
   * optional classname
   */
  readonly className?: string;
}

export const CardSecondaryText: React.FunctionComponent<ICardSecondaryText> = (
  props: ICardSecondaryText
) => {
  const { className, text } = props;
  const theme = useTheme();
  return (
    <Text
      variant="small"
      style={{ color: theme.palette.neutralSecondary }}
      block
      nowrap
      className={className ?? ""}
    >
      {text}
    </Text>
  );
};
