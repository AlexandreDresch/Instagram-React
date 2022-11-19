import LogoText from '../../assets/logo.png';
import Logo from '../../assets/instagram.png';
import PaperPlane from '../../assets/paper-plane-outline.svg';
import Compass from '../../assets/compass-outline.svg';
import Heart from '../../assets/heart-like.svg';
import Person from '../../assets/person-outline.svg';

import './styles.css';

export function NavBar() {
  return (
    <header className="header-container">
        <div className="header-content">
            <div className="logo-container">
                <img src={LogoText} alt='logo text' />
                <div className="vertical-bar"></div>
                <img src={Logo} className="logo-text" alt='logo'/>
            </div>

            <input placeholder="Pesquisar" type="text" />

            <nav className="icons-container">
                <a href="#">
                    <img src={PaperPlane} className="header-icon" alt='paper plane icon'/>
                </a>
                <a href="#">
                    <img src={Compass} className="header-icon" alt='compass icon'/>
                </a>
                <a href="#">
                    <img src={Heart}className="header-icon" alt='heart icon'/>
                </a>
                <a href="#">
                    <img src={Person} className="header-icon" alt='person icon'/>
                </a>
            </nav>
        </div>
    </header>        
  );
};

