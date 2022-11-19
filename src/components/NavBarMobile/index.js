import LogoText from '../../assets/logo.png';
import Logo from '../../assets/instagram.png';
import PaperPlane from '../../assets/paper-plane-outline.svg';

import './styles.css';

export function NavBarMobile () {
    return (
        <div className="header-mobile">
            <img src={Logo} alt='logo'/>
            <img className="logo-text" src={LogoText} alt='logo text' />
            <a href="#">
                <img src={PaperPlane} className="header-icon"/>
            </a>
        </div>
    )
}