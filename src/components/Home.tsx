// home.tsx
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../components/context/theme-context';
import { useTranslation } from 'react-i18next';
//Styles
import '../styles/home.scss';
import '../styles/responsive.scss';
//Gifs
import Hero from './animations/Hero';
import Welcome from './animations/Welcome';
import Footer from './animations/FooterAnima';
//Scroll;
import Slider from './home-projects-slider/ScrollMenu';
import ScrollToTop from "react-scroll-to-top";
//images
import welcomeImg from '../assets/asset1.png';
import uiuxImg from '../assets/uiux.png';
import webImg from '../assets/web.png';
import graphicImg from '../assets/graphic.png';
import illustraImg from '../assets/ilustra.png';
import abiPic from '../assets/abi.png';
import kitPic from '../assets/kitzia.png';
import ausiPic from '../assets/ausi.png';

function Home() {

  //translator
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  } 
  
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {

    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');

  };

  return (
    <>
    <div className='home'>
        {/* INTRO */}
        <div className='hero'>
            <h1>nahualli.arts</h1>
            <div className='hero-dis'>
                <h4>{t("home.hero")}</h4>
                <button>{t("home.button-intro")}</button>
            </div>
            <Hero/>
            
        </div>
        {/* WELCOME */}
        <div id="welcome" className='welcome'>
            <div className='welcome-text'>
                <h2>{t("home.welcome")}</h2>
                <p>{t("home.intro.1")}</p>
                <p>{t("home.intro.2")}</p>
            </div>
              <Welcome/>
        </div>
        {/* TEXT DECORATION */}
        <div className='text-anima'>
            <div className="animation-text">
                <h2>UI Design - Web Design - Illustration - Graphic Design -</h2>
                <h2> UI Design - Web Design - Illustration - Graphic Design</h2>
            </div>
        </div>
        {/* SERVICES */}
        <div id="work" className='work-section'>
            <div className='section'>
                <div className='work-card'>
                    <h4>{t("home.work.ui-design")}</h4>
                    <img src={uiuxImg} alt="decorative image"/>
                    <p>{t("home.work.ui-text")}</p>
                </div>
                <div className='work-card'>
                    <h4>{t("home.work.web-design")}</h4>
                    <img src={webImg} alt="decorative image"/>
                    <p>{t("home.work.web-text")}</p>
                </div>
            </div>
            <div className='section'>
                <div className='work-card'>
                    <h4>{t("home.work.illustration")}</h4>
                    <img src={illustraImg} alt="decorative image"/>
                    <p>{t("home.work.illustration-text")}</p>
                </div>
                <div className='work-card'>
                    <h4>{t("home.work.graphic-design")}</h4>
                    <img src={graphicImg} alt="decorative image"/>
                    <p>{t("home.work.graphic-text")}</p>
                </div>
            </div>
        </div>

        {/* TEAM */}
        <div id="team" className='team-section'>
            <div className='members'>
                <div className='members-line'>
                    <div className='member-card'>
                        <img src={abiPic} alt="A draw of Abigail P"/>
                        <h3>Abigail P</h3>
                        <p>{t("home.team.sandra-text")}</p>
                    </div>
                    <div className='member-card'>
                        <img src={ausiPic} alt="A draw of Aurora R"/>
                        <h3>Aurora R</h3>
                        <p>{t("home.team.ausi-text")}</p>
                    </div>
                </div>
                <div className='members-line'>
                    <div className='member-card'>
                        <img src={kitPic} alt="A draw of Kitzia P"/>
                        <h3>Kitzia P</h3>
                        <p>{t("home.team.kitzia-text")}</p>
                    </div>
                </div>
            </div>

            <div className='team-text'>
                <h2>{t("home.team.title")}</h2>
                <p>{t("home.team.text")}</p>
            </div>
        </div>

        {/* SLIDER IT'S A COMPONENT */}
        <div>
            <Slider/>
        </div>
            
        {/* CTA */}
        <div id="contact" className='ctaSection'>
            <div className='ctaText'>
                <h2>{t("home.cta.title")}</h2>
                <p>{t("home.cta.text")}</p>
                <h3><a href='mailto:contacto@nahualliart.com'>contacto@nahualliart.com</a></h3>
            </div>
            <Footer/>
        </div>

        {/* SCROLL TO TOP */}
        <ScrollToTop/>
    </div>    
    </>
  );
};

export default Home;

