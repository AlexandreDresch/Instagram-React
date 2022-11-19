import Home from '../../assets/home.svg';
import Search from '../../assets/search-outline.svg';
import Add from '../../assets/add-circle-outline.svg';
import Heart from '../../assets/heart-like.svg';
import Person from '../../assets/person-outline.svg';

import "./styles.css";

export function FooterMobile() {
  return (
    <footer>
      <div className="footer-container">
        <img src={Home} />
        <img src={Search} />
        <img src={Add} />
        <img src={Heart} />
        <img src={Person} />
      </div>
    </footer>
  );
}
