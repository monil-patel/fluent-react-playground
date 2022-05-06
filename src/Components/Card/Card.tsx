import "./Card.css";

import * as React from "react";

import { Depths, mergeStyles, useTheme } from "@fluentui/react";

interface ICardProps {
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
        boxShadow: `0 3.2px 7.2px 0 rgb(0 0 0 / 13%), 0 0.6px 1.8px 0 rgb(0 0 0 / 11%)`,
        ...styles,
      }}
    >
      {props.children}
    </div>
  );
};
