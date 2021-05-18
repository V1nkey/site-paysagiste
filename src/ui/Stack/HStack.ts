import styled from "styled-components";

export const HStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;
