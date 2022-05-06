import { FontIcon, Stack, Text } from "@fluentui/react";
import * as React from "react";

interface ICardHeaderProps {
  /**
   *Text to display within the header
   */
  readonly text: string;

  /**
   * Optional icon to render to the left of the text
   */
  readonly iconName?: string;

  /**
   * optional classname
   */
  readonly className?: string;
}

export const CardHeader: React.FunctionComponent<ICardHeaderProps> = (
  props: ICardHeaderProps
) => {
  const { iconName, className } = props;
  return (
    <div className={`fluent-card-header  ${className ?? ""}`}>
      <Stack horizontal verticalAlign="center" className={`fluent-card-title`}>
        {iconName && <FontIcon iconName={iconName} />}
        <Text variant="medium" block nowrap className="fluent-card-title-text">
          {props.text}
        </Text>
      </Stack>
    </div>
  );
};
