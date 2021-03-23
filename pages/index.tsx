import Head from "next/head";
import React from "react";
import { Accueil } from "../src/components/Accueil/Accueil";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Paysagiste</title>
    </Head>
    <Accueil />
  </>
);

export default Home;
