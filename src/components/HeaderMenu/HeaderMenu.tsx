import { Navbar } from "../Navbar/Navbar";
import { HeaderBackground } from "./styles";

export const HeaderMenu: React.FC = () => (
  <>
    <HeaderBackground>Adrien Albino</HeaderBackground>
    <Navbar
      liens={[
        { titre: "Particuliers", url: "/" },
        { titre: "Professionnels", url: "/" },
        { titre: "Tarifs", url: "/" },
        { titre: "Contact", url: "/" },
      ]}
    />
  </>
);
