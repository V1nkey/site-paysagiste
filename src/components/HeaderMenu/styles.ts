import styled from "styled-components";

export const HeaderBackground = styled.header.attrs({ role: "banner" })`
  background-color: lightgreen; 
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  
  a {
    color: initial;
    text-decoration: none;
  }
`;