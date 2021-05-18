import React from "react";

import { PageContent } from "../../ui/Page/PageContent";
import { PageSection } from "../../ui/Page/PageSection";
import { AppMain } from "../App/AppMain";
import { AccueilLayout } from "./styles";

export const Accueil: React.FC = () => (
  <AppMain>
    <PageContent>
      <AccueilLayout>
        <PageSection>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere,
          ipsum sit amet vehicula fermentum, eros ex iaculis leo, eu pretium
          justo augue eget nisl. Donec iaculis turpis a vehicula rutrum. Nunc
          aliquam in quam a vulputate. Maecenas sed enim id orci pharetra
          lacinia vel ut quam. Nullam eu nisi risus. Vestibulum dapibus nisi et
          dapibus pretium. Maecenas vitae dignissim quam, in sagittis nunc.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
          sodales quam augue, nec pretium nisl cursus sit amet. Suspendisse in
          arcu at nisl blandit suscipit a in ligula. Nullam fermentum odio a
          augue vulputate, in sagittis tortor commodo. Duis suscipit lacus nec
          pharetra ultrices. Pellentesque a leo quis sapien viverra ullamcorper.
          Nullam tincidunt, urna vitae vestibulum tristique, nunc ligula congue
          augue, sit amet dictum velit sapien quis ex. Duis ac scelerisque leo,
          eu feugiat dolor. Nunc aliquam ante et tellus molestie, id elementum
          diam porttitor. Donec nec rutrum magna. In mattis dolor risus, ac
          rutrum lorem placerat sed. Pellentesque venenatis mi at tempor
          blandit. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; In venenatis nunc nisi, vitae interdum
          neque facilisis et. In sagittis eu odio vel fermentum. Praesent a
          vehicula nisl. Curabitur finibus tempor purus, eu efficitur eros
          dapibus id. Sed non elit ac augue pharetra vulputate. Nam sagittis
          finibus scelerisque. Maecenas id mauris a massa condimentum mattis.
          Duis volutpat laoreet justo eu feugiat. Donec id sem eu elit tempus
          aliquet. Sed varius varius libero.
        </PageSection>
        <div></div>
      </AccueilLayout>
    </PageContent>
  </AppMain>
);
