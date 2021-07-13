import { faCoffee,faHamburger,faPhone,faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HomePage = () => {
    return (  
        <div className="homepage">  
            <section className="socials homepage__socials">
                <div className="socials__item"><FontAwesomeIcon icon={faTwitter}/></div>
                <div className="socials__item"><FontAwesomeIcon icon={faFacebook}/></div>
                <div className="socials__item"><FontAwesomeIcon icon={faInstagram}/></div>
            </section>
            <nav className="menu homepage__nav">
                <div className="logo">
                    <img src="" alt="" className="logo__image" />
                    <span className="logo__name">Nazwa firmy</span>
                </div>
                {/* <ul className="menu__list">
                    <li className="menu__item">Home</li>
                    <li className="menu__item">O nas</li>
                    <li className="menu__item">Rezerwacje</li>
                    <li className="menu__item">Kontakt</li>
                </ul> */}
                <div className="menu__hamburger"><FontAwesomeIcon icon={faHamburger}/></div>
            </nav>
            <section className="header homepage__header">
                <span>Twój cel nasze wyzwanie</span>
            </section>
            <section className="trainers homepage__trainers">
                <div className="trainers__title"><span>Nasi Trenerzy</span></div>
                <div className="trainers__trainer__img"><img /></div>
                <div className="trainers__trainer__name">Patryk Trener</div>
                <div className="trainers__trainer__job">Dietetyk / Trener Personalny</div>
            </section>
            <section className="aboutus homepage__aboutus">
                <div className="aboutus__title">O nas</div>
                <div className="aboutus__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, eaque. Modi adipisci explicabo impedit, optio eaque esse architecto facilis dolor sapiente quos? Aspernatur quam omnis blanditiis odio corporis itaque recusandae!</div>
            </section>
            <section className="transformations homepage__transformation">
                <div className="transformation__person"><img src="" alt="" /></div>
                <div className="transformation__person"><img src="" alt="" /></div>
                <div className="transformation__person"><img src="" alt="" /></div>
            </section>
            <section className="offer homepage__offer">
                <div className="offer__title">
                    <span>Nasza Oferta</span>
                </div>
                <div className="offer__elements">
                    <div className="offer__item"><img src="" alt="" /><div className="offer__item__title--big"><div className="offer__item__title--small"></div></div></div>
                    <div className="offer__item"><img src="" alt="" /><div className="offer__item__title--big"><div className="offer__item__title--small"></div></div></div>
                    <div className="offer__item"><img src="" alt="" /><div className="offer__item__title--big"><div className="offer__item__title--small"></div></div></div>
                    <div className="offer__item"><img src="" alt="" /><div className="offer__item__title--big"><div className="offer__item__title--small"></div></div></div>
                    <div className="offer__item"><img src="" alt="" /><div className="offer__item__title--big"><div className="offer__item__title--small"></div></div></div>
                    <div className="offer__item"><img src="" alt="" /><div className="offer__item__title--big"><div className="offer__item__title--small"></div></div></div>
                    <div className="offer__btn">Sprawdź naszą ofertę</div>
                </div>
            </section>
            <section className="packages homepage__packages">
                <div className="packages__title">Pakiety</div>
                <div className="packages__elements">
                    <div className="packages__elements__item"><div className="packages__elements__item__content--big"></div><div className="packages__elements__item__content--small"></div><button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                    <div className="packages__elements__item"><div className="packages__elements__item__content--big"></div><div className="packages__elements__item__content--small"></div><button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                    <div className="packages__elements__item"><div className="packages__elements__item__content--big"></div><div className="packages__elements__item__content--small"></div><button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                    <div className="packages__elements__item"><div className="packages__elements__item__content--big"></div><div className="packages__elements__item__content--small"></div><button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                </div>
                <div className="packages__others"><span className="packages__others--white">Jeżeli żaden pakiet nie jest dla Ciebie odpowiedni – zadzwoń a na pewno dostosujemy ofertę.</span></div>
            </section>
            <section className="contactus homepage__contactus">
                <div className="contactus__previoustext"></div>
                <div className="contactus__title"></div>
                <div className="contactus__socials">
                    <div className="contactus__socials__item"><FontAwesomeIcon icon={faPhone}/><div className="contactus__socials__item__title--big">Telefon komórkowy</div><div className="contactus__socials__item__title--small"></div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon icon={faMailBulk}/><div className="contactus__socials__item__title--big">E-mail</div><div className="contactus__socials__item__title--small"></div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon icon={faFacebook}/><div className="contactus__socials__item__title--big">Facebook</div><div className="contactus__socials__item__title--small"></div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon icon={faInstagram}/><div className="contactus__socials__item__title--big">Instagram</div><div className="contactus__socials__item__title--small"></div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon icon={faTwitter}/><div className="contactus__socials__item__title--big">Twitter</div><div className="contactus__socials__item__title--small"></div></div>
                </div>
                <div className="contactus__map"></div>
                <form className="sendmail" action="/">
                    <input className="sendmail__name" type="text" />
                    <input className="sendmail__email"type="text" />
                    <input className="sendmail__subject" type="text" />
                    <input className="sendmail__content" type="text" />
                    <button className="button sendmail__btn">Wyślij wiadomość</button>
                </form>
            </section>

            <footer className="footer homepage__footer">
                <div className="footer__copyright-info">Zastrzeżone</div>
                <address className="footer__copyrigt-address">Adres</address>
            </footer>

        </div>
    );
}
 
export default HomePage;