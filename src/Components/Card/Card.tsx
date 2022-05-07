import "./Card.css";

import * as React from "react";

import { Text, mergeStyles, useTheme } from "@fluentui/react";

interface ICardProps {
  readonly title?: string;
  /**
   * Optional classname to add to the card container div
   */
  readonly className?: string;

  /**
   * Any styles to apply to the card
   * Note: this can override defaults
   */
  readonly styles?: React.CSSProperties;

  /**
   * What to render in the card container
   */
  readonly children?: React.ReactNode;

  /**
   * Determine if this card is clickable
   */
  readonly onClick?: () => void;
}

/**
 * Consolidates card styling (colors, drop shadows, padding)
 */
export const Card: React.FunctionComponent<ICardProps> = (
  props: ICardProps
) => {
  const { styles, onClick } = props;
  const theme = useTheme();

  const cardBackground = theme.isInverted
    ? theme.palette.neutralLighterAlt
    : theme.palette.whiteTranslucent40;

  const cardBackgroundHover = theme.isInverted
    ? theme.palette.neutralLight
    : theme.palette.white;

  const clickableCardStyles = mergeStyles({
    cursor: "pointer",
    ":hover": {
      background: `${cardBackgroundHover} !important`,
    },
  });

  return (
    <div
      onClick={onClick}
      className={`fluent-card-container ${props.className ?? ""} ${
        props.onClick ? clickableCardStyles : ""
      }`}
      style={{
        background: cardBackground,
        ...styles,
      }}
    >
      {props.title && (
        <div className="fluent-card-header-default ">
          <Text className="fluent-card-title-text" variant="mediumPlus">
            {props.title}
          </Text>
        </div>
      )}
      <div className="fluent-card-content">{props.children}</div>
    </div>
  );
};
