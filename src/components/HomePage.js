import { faCoffee, faHamburger, faPhone, faMailBulk, faHeartbeat,faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swip from './Swip';
import '../sass/homepage.css';
import Navbar from './Navbar';
const HomePage = () => {
    return (
        <div className="homepage">
            <section className="socials homepage__socials">
                <div className="socials__item"><FontAwesomeIcon icon={faTwitter} size="2x" color="grey" /></div>
                <div className="socials__item"><FontAwesomeIcon icon={faFacebook} size="2x" color="grey" /></div>
                <div className="socials__item"><FontAwesomeIcon icon={faInstagram} size="2x" color="grey" /></div>
            </section>
            <div className="homepage__wrapper">
                <div className="homepage__line"></div>
            </div>
            <Navbar />
            {/* <nav className="menu homepage__nav">
                <div className="logo">
                    <img src="" alt="" className="logo__image" />
                    <span className="logo__name">Trainers P.R.O</span>
                </div>
                <ul className="menu__list">
                    <li className="menu__item">Home</li>
                    <li className="menu__item">O nas</li>
                    <li className="menu__item">Rezerwacje</li>
                    <li className="menu__item">Kontakt</li>
                </ul>
                <div className="menu__hamburger"><FontAwesomeIcon icon={faBars} /></div>
            </nav> */}

            <section className="header homepage__header">
                <span className="header__title">Twój cel nasze wyzwanie</span>
            </section>
            <section className="trainers homepage__trainers">
                <div className="trainers__title"><span>Nasi Trenerzy</span></div>
                <div className="trainers__trainer">
                    <div className="trainers__trainer__img"><img src="http://localhost:3000/trainer5.jpg" alt="trener" /></div>
                    <div className="trainers__trainer__name">Patryk Trener</div>
                    <div className="trainers__trainer__job">Dietetyk / Trener Personalny</div>
                </div>
            </section>
            {/* <Swip /> */}
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
                    Nasza Oferta
                </div>
                <div className="offer__elements">
                    <div className="offer__item"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /><div className="offer__item__title--big">Trening start-up</div><div className="offer__item__title--small">dedykowany osobom rozpoczynającym swoją przygodę z aktywnością fizyczną</div></div>
                    <div className="offer__item"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /><div className="offer__item__title--big">Trening beauty line</div><div className="offer__item__title--small">nastawiony na kształtowanie mięśni w możliwie najlepszych proporcjach Twojego ciała</div></div>
                    <div className="offer__item"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /><div className="offer__item__title--big">Trening ogólnorozwojowy</div><div className="offer__item__title--small">byś poczuł się lepiej we własnym ciele</div></div>
                    <div className="offer__item"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /><div className="offer__item__title--big">Rozwój</div><div className="offer__item__title--small">byś poczuł się lepiej we własnym ciele</div></div>
                    <div className="offer__item"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /><div className="offer__item__title--big">Trening redukcyjny</div><div className="offer__item__title--small">który pomoże Ci pozbyć się nadprogramowej ilości tkanki tłuszczowej</div></div>
                    <div className="offer__item"><FontAwesomeIcon icon={faInstagram} size="3x" color="white" /><div className="offer__item__title--big">Trening medyczny</div><div className="offer__item__title--small">umożliwia zwiększenie kontroli nad własnym ciałem oraz prawidłowe funkcjonowanie aparatu ruchu</div></div>
                    <button className="btn offer__btn">Sprawdź naszą ofertę</button>
                </div>
            </section>
            <section className="packages homepage__packages">
                <div className="packages__title">Pakiety</div>

                <div className="packages__elements">
                    <div className="packages__elements__item">


                        <div className="packages__elements__item__content--big">Pakiet 1 trening personalny</div>

                        <div className="packages__elements__item__content--small">W cenie pakietu zyskasz:
                            <p>⊕ trening personalny który trwa 60 minut</p>
                            <p>⊕ informacje dotyczące twojej ogólnej sprawności</p>
                            <p>⊕ wskazówki dotyczące planu treningowego</p>

                        </div>
                        <button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                    <div className="packages__elements__item">
                        <div className="packages__elements__item__content--big">Pakiet 4 treningi personalne</div>

                        <div className="packages__elements__item__content--small">W cenie pakietu zyskasz:
                            <p>⊕ trening personalny który trwa 60 minut</p>
                            <p>⊕ informacje dotyczące twojej ogólnej sprawności</p>
                            <p>⊕ wskazówki dotyczące planu treningowego</p></div>
                        <button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                    <div className="packages__elements__item">
                        <div className="packages__elements__item__content--big">Pakiet 8 treningów personalnych</div>

                        <div className="packages__elements__item__content--small">W cenie pakietu zyskasz:
                            <p>⊕ trening personalny który trwa 60 minut</p>
                            <p>⊕ informacje dotyczące twojej ogólnej sprawności</p>
                            <p>⊕ wskazówki dotyczące planu treningowego</p></div>
                        <button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                    <div className="packages__elements__item">
                        <div className="packages__elements__item__content--big">Pakiet 12 treningów personalnych</div>

                        <div className="packages__elements__item__content--small">W cenie pakietu zyskasz:
                            <p>⊕ trening personalny który trwa 60 minut</p>
                            <p>⊕ informacje dotyczące twojej ogólnej sprawności</p>
                            <p>⊕ wskazówki dotyczące planu treningowego</p></div>
                        <button className="button packages__elements__item__btn">Wykup pakiet</button></div>
                </div>
                <div className="packages__others"><span className="packages__others--white">Jeżeli żaden pakiet nie jest dla Ciebie odpowiedni – zadzwoń a na pewno dostosujemy ofertę.</span></div>
            </section>
            <section className="contactus homepage__contactus">
                <div className="contactus__title">Skontaktuj się z nami</div>
                <div className="contactus__socials">
                    <div className="contactus__socials__item"><FontAwesomeIcon size="3x" icon={faPhone} /><div className="contactus__socials__item__title--big">Telefon komórkowy</div><div className="contactus__socials__item__title--small">501779384</div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon size="3x" icon={faMailBulk} /><div className="contactus__socials__item__title--big">E-mail</div><div className="contactus__socials__item__title--small">TrainersPRO@gmail.com</div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon size="3x" icon={faFacebook} /><div className="contactus__socials__item__title--big">Facebook</div><div className="contactus__socials__item__title--small">https://www.facebook.com/TrainersPRO</div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon size="3x" icon={faInstagram} /><div className="contactus__socials__item__title--big">Instagram</div><div className="contactus__socials__item__title--small">https://www.instagram.com/TrainersPRO</div></div>
                    <div className="contactus__socials__item"><FontAwesomeIcon size="3x" icon={faTwitter} /><div className="contactus__socials__item__title--big">Twitter</div><div className="contactus__socials__item__title--small">https://www.twitter.com/TrainersPRO</div></div>
                </div>
                <div className="contactus__map"></div>
                <div className="contactus__sendmail__title">Wyślij wiadomość</div>
                <form className="sendmail" action="/">
                    <input className="sendmail__input sendmail__name" placeholder="imie" type="text" />
                    <input className="sendmail__input sendmail__email" placeholder="email" type="text" />
                    <input className="sendmail__input sendmail__subject" placeholder="temat" type="text" />
                    <input className="sendmail__input sendmail__content" placeholder="wiadomość" type="textarea" />
                    <button className="button sendmail__btn">Wyślij wiadomość</button>
                </form>
            </section>

            <footer className="footer homepage__footer">
                <div className="footer__copyright-info--red">Polityka prywatności</div>
                <div className="footer__copyright-info--white">Wszelkie prawa zastrzeżone &copy; Trainers P.R.O</div>
                {/* <address className="footer__copyrigt-address">Adres</address> */}
            </footer>

        </div>
    );
}

export default HomePage;