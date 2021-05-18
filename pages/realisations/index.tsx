import React from "react";

import { AppMain } from "../../src/components/App/AppMain";
import { Realisation } from "../../src/components/Realisation/Realisation";
import { PageContent } from "../../src/ui/Page/PageContent";
import { PageSection } from "../../src/ui/Page/PageSection";

const Tarifs: React.FC = () => (
  <AppMain>
    <PageContent>
      <PageSection>
        <Realisation
          titre="Réalisation 1"
          description="Description de la réalisation n°1"
          avant={{ src: "static/placeholder.png", alt: "avant" }}
          apres={{ src: "static/placeholder.png", alt: "apres" }}
          plan={{ src: "static/placeholder.png", alt: "plan" }}
        />
      </PageSection>
      <PageSection>
        <Realisation
          titre="Réalisation 2"
          description="Description de la réalisation n°2"
          avant={{ src: "static/placeholder.png", alt: "avant" }}
          apres={{ src: "static/placeholder.png", alt: "apres" }}
          plan={{ src: "static/placeholder.png", alt: "plan" }}
        />
      </PageSection>
      <PageSection>
        <Realisation
          titre="Réalisation 3"
          description="Description de la réalisation n°3"
          avant={{ src: "static/placeholder.png", alt: "avant" }}
          apres={{ src: "static/placeholder.png", alt: "apres" }}
          plan={{ src: "static/placeholder.png", alt: "plan" }}
        />
      </PageSection>
    </PageContent>
  </AppMain>
);

export default Tarifs;
