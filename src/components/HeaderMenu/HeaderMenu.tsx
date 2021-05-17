import Link from "next/link";
import React, { useEffect, useState } from "react";

import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Navbar } from "../Navbar/Navbar";

import { HeaderBackground } from "./styles";

export const HeaderMenu: React.FC = () => {
  const liens = [
    { titre: "Accueil", url: "/" },
    { titre: "Réalisations", url: "/realisations" },
    { titre: "Particuliers", url: "/particuliers" },
    { titre: "Professionnels", url: "/professionnels" },
    { titre: "Contact", url: "/contact" },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  const isDesktop = () => windowWidth > 800;

  useEffect(() => {
    if (typeof windowWidth !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowWidth]);

  return (
    <>
      <HeaderBackground isDesktop={isDesktop()}>
        <Link href="/">
          <a>Adrien Albino - Paysagiste</a>
        </Link>
        {!isDesktop() && <BurgerMenu liens={liens} />}
      </HeaderBackground>
      {isDesktop() && <Navbar liens={liens} />}
    </>
  );
};
