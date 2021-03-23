import Head from "next/head";
import React from "react";
import { Accueil } from "../src/components/Accueil/Accueil";
import { HeaderMenu } from "../src/components/HeaderMenu/HeaderMenu";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Paysagiste</title>
    </Head>
    <HeaderMenu />
    <Accueil />
  </>
);

export default Home;
