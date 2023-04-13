// footer.tsx
import { ChangeEventHandler } from 'react';
import { useContext } from 'react';
import '../styles/footer.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
//icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn, FaTiktok, FaFacebookF, FaDribbble } from "react-icons/fa";

function Footer() {

  //translator
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  }

  const setDark = () => {
    localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");

    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }


  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  }

  
  return (
    <footer>
        <h3>Find more at</h3>
        <div className='socials'>
          <Link to={'https://www.tiktok.com/@nahualliart'} target="_blank" rel="noopener noreferrer">
            <FaTiktok className='iconF'/>
          </Link>
          <Link to={'https://www.facebook.com/nahualliart33'} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className='iconF'/>
          </Link>
          <Link to={'https://www.linkedin.com/in/nahualli-art-368170269/'} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='iconF'/>
          </Link>
          <Link to={'https://dribbble.com/nahualliart-team'} target="_blank" rel="noopener noreferrer">
            <FaDribbble className='iconF'/>
          </Link>
          <Link to={'https://wa.link/9czyqo'} target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className='iconF'/>
          </Link>
        </div>
        <h1>nahualli.art</h1>
        <div className='bottomSect'></div>
    </footer>
  );
};

export default Footer;

