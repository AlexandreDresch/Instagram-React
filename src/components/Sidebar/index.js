import { Usuario } from "./Usuario";
import "./styles.css";

import profPic from "../../assets/catanacomics.png";
import { Sugestoes } from "./Sugestoes";

export function Sidebar() {
  return (
    <div className="right-content">
      <Usuario
        profilePicture={profPic}
        profile="catanacomics"
        profileName="Catana"
      />

      <Sugestoes />

      <div className="right-content-footer">
        <a href="#">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </a>

        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
