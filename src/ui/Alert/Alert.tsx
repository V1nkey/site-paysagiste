import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { AlertLayout, AlertTitle } from "./styles";
import { AlertType } from "../../types";

export interface AlertProps {
  type: AlertType;
  icon: IconDefinition;
  title: JSX.Element;
  outlined?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  icon,
  title,
  children,
}) => {
  return (
    <AlertLayout alertType={type}>
      <AlertTitle>
        <FontAwesomeIcon icon={icon} aria-hidden={true} />
        {title}
      </AlertTitle>
      {children}
    </AlertLayout>
  );
};
