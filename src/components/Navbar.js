import { faCoffee, faHamburger, faPhone, faMailBulk, faHeartbeat,faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return ( 
        <nav className="menu homepage__nav">
                <div className="logo">
                    <img src="" alt="" className="logo__image" />
                    <span className="logo__name">Trainers P.R.O</span>
                </div>
                {/* <ul className="menu__list">
                    <li className="menu__item">Home</li>
                    <li className="menu__item">O nas</li>
                    <li className="menu__item">Rezerwacje</li>
                    <li className="menu__item">Kontakt</li>
                </ul> */}
                <div className="menu__hamburger"><FontAwesomeIcon icon={faBars} /></div>
            </nav>
     );
}
 
export default Navbar;