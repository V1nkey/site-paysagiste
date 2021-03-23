import "reset.css/reset.css";
import "../styles/globals.css";

import React from "react";

const SitePaysagiste: React.FC<any> = ({ Component, pageProps }) => (
  <>
    <style global jsx>{`
      html {
        font-size: 62.5%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      body {
        max-width: 1200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        
        font-size: 1.4rem;
        line-height: 1.32;
        background-color: lightblue};
      }

      body > * {
        max-width: 1200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default SitePaysagiste;
