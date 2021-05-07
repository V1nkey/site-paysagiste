import "reset.css/reset.css";
// import "../styles/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import React from "react";
import { HeaderMenu } from "../src/components/HeaderMenu/HeaderMenu";

// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

const SitePaysagiste: React.FC<any> = ({ Component, pageProps }) => (
  <>
    <style global jsx>{`
      html {
        font-size: 62.5%;
      }

      body {
        font-size: 1.4rem;
        line-height: 1.32;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      
      * {
       box-sizing: border-box;
      }
    `}</style>
    <HeaderMenu />
    <Component {...pageProps} />
  </>
);

export default SitePaysagiste;
