import styled from "styled-components";
import { AlertType } from "../../types";
import { colorPalette } from "../Colors/colorPalette";

interface AlertLayoutProps {
  alertType: AlertType;
}

const getSvgColor = ({ alertType }: AlertLayoutProps) => {
  switch (alertType) {
    case "info":
      return colorPalette.blue["600"];
    case "success":
      return colorPalette.green["700"];
    case "warning":
      return colorPalette.citrus["700"];
    case "error":
      return colorPalette.red["600"];
  }
};

const getBorderColor = ({ alertType }: AlertLayoutProps) => {
  switch (alertType) {
    case "info":
      return colorPalette.blue["300"];
    case "success":
      return colorPalette.green["700"];
    case "warning":
      return colorPalette.citrus["100"];
    case "error":
      return colorPalette.red["100"];
  }
};

const getBackgroundColor = ({ alertType }: AlertLayoutProps) => {
  switch (alertType) {
    case "info":
      return colorPalette.blue["50"];
    case "success":
      return colorPalette.green["100"];
    case "warning":
      return colorPalette.citrus["50"];
    case "error":
      return colorPalette.red["50"];
  }
};

export const AlertLayout = styled.div<AlertLayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.6rem 0;
  padding: 2.3rem 4.8rem;
  border-top: solid 1px ${getBorderColor};
  border-bottom: solid 1px ${getBorderColor};
  border-radius: 0.4rem;

  background-color: ${getBackgroundColor};

  svg {
    height: 1.4rem;
    width: 1.4rem;

    margin-right: 1rem;

    color: ${getSvgColor};
  }
`;

export const AlertTitle = styled.div`
  display: flex;
  text-align: center;

  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
`;
