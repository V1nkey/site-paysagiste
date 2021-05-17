import styled from "styled-components";

interface HeaderBackgroundProps {
  isDesktop: boolean;
}

export const HeaderBackground = styled.header.attrs({
  role: "banner",
})<HeaderBackgroundProps>`
  background-color: lightgreen;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isDesktop ? "center" : "space-between")};
  padding: 2rem 1rem;

  a {
    color: initial;
    text-decoration: none;
  }
`;
