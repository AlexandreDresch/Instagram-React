import { FooterMobile } from "../FooterMobile";
import { Posts } from "../Posts";
import { Sidebar } from "../Sidebar";
import { Stories } from "../Stories";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.css";

export function Corpo () {
  const { width } = useWindowDimensions();

  return (
    <div className="body-container">
      <div className="content-container">
        <div className="left-content-container">
          <Stories />
          <Posts />
        </div>

        <div className="right-content-container">
          <Sidebar />
        </div>
      </div>

      {width < 614 && <FooterMobile />}
    </div>
  );
}
