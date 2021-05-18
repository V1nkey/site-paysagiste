import styled from "styled-components";
import { PageContent } from "../../ui/Page/PageContent";

export const AccueilLayout = styled(PageContent)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  > * {
    border: 1px solid;
    margin: 1rem;
  }
`;
