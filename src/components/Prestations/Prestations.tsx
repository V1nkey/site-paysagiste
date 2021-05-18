import React from "react";
import { Prestation } from "./Prestation/Prestation";
import { PrestationsLayout } from "./styles";

export const Prestations: React.FC = () => (
  <PrestationsLayout>
    <Prestation titre="Prestation 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere,
        ipsum sit amet vehicula fermentum, eros ex iaculis leo, eu pretium justo
        augue eget nisl. Donec iaculis turpis a vehicula rutrum. Nunc aliquam in
        quam a vulputate. Maecenas sed enim id orci pharetra lacinia vel ut
        quam. Nullam eu nisi risus. Vestibulum dapibus nisi et dapibus pretium.
        Maecenas vitae dignissim quam, in sagittis nunc. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </Prestation>

    <Prestation titre="Prestation 2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere,
        ipsum sit amet vehicula fermentum, eros ex iaculis leo, eu pretium justo
        augue eget nisl. Donec iaculis turpis a vehicula rutrum. Nunc aliquam in
        quam a vulputate. Maecenas sed enim id orci pharetra lacinia vel ut
        quam. Nullam eu nisi risus. Vestibulum dapibus nisi et dapibus pretium.
        Maecenas vitae dignissim quam, in sagittis nunc. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </Prestation>

    <Prestation titre="Prestation 3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere,
        ipsum sit amet vehicula fermentum, eros ex iaculis leo, eu pretium justo
        augue eget nisl. Donec iaculis turpis a vehicula rutrum. Nunc aliquam in
        quam a vulputate. Maecenas sed enim id orci pharetra lacinia vel ut
        quam. Nullam eu nisi risus. Vestibulum dapibus nisi et dapibus pretium.
        Maecenas vitae dignissim quam, in sagittis nunc. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </Prestation>
  </PrestationsLayout>
);
