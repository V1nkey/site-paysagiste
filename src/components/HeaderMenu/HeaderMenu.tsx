import { Navbar } from "../Navbar/Navbar";
import { HeaderBackground } from "./styles";

export const HeaderMenu: React.FC = () => (
  <>
    <HeaderBackground>Adrien Albino</HeaderBackground>
    <Navbar
      liens={[
        { titre: "Particuliers", url: "/particuliers" },
        { titre: "Professionnels", url: "/professionnels" },
        { titre: "Tarifs", url: "/tarifs" },
        { titre: "Contact", url: "/contact" },
      ]}
    />
  </>
);
