import styled from "styled-components";

export const PageContentAccueil = styled.div`
  section :nth-child(-n + 2) {
    background-color: lightskyblue;
  }
`;

export const PageSectionAccueil = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem;

  > div:first-of-type {
    max-width: 500px;
    width: 100%;
  }
`;
