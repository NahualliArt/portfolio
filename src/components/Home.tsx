// home.tsx
import { useContext } from 'react';
import { ThemeContext } from '../components/context/theme-context';
import { useTranslation } from 'react-i18next';
//GSAP
import gsap from 'gsap';
import React, {useEffect, useRef} from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
//Modals
import ModalAterriza from './alerts/AterrizaSocio';
import useModal from './hooks/UseModal';
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
import nekaPic from '../assets/neka.png';
import iduPic from '../assets/idu.png';
import galaPic from '../assets/gala.png';

function Home() {

    //REF practice
    //Hero
    let hero = useRef(null);
    let heroTitle = useRef(null);
    let heroDis = useRef(null);
    //Welcome
    let mm = gsap.matchMedia();
    let breakPoint = 1024;
    let mobileBreakPoint = 480;

    mm.add(
        {
            isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
            isTablet: `(max-width: ${breakPoint - 1}px) and (min-width: ${mobileBreakPoint + 1}px) and (prefers-reduced-motion: no-preference)`,
            isMobile: `(max-width: ${
                mobileBreakPoint
            }px) and (prefers-reduced-motion: no-preference)`
	    },
        (context) => {
           let welcome =  gsap.timeline({
                scrollTrigger: {
                  trigger: ".welcome",
                  start: "top top",
                  end: "+=500",
                  invalidateOnRefresh: true
                }
            });

            welcome.from(".welcome", {
                opacity: 100,
                yPercent: -45,
                duration: 0,
                ease: "back.out(5)"})
                .from(".welcome-text", {
                    opacity: 0,
                    xPercent: -50
                  })
                .to(".welcome-text", {
                    opacity: 100,
                    xPercent: 5,
                    duration: 3,
                    ease: "back.out(1.6)"
                })
        }
    );


    //Text Decoration
    let txtAnima = useRef(null);

    //Animation code here
    useEffect(() => {

        //Hero
        gsap.to(hero.current, {
            yPercent: -6, 
            opacity: 100, 
            duration: 3,
            delay: -.5
        });

        gsap.to(heroTitle.current, {
            duration: 3,
            opacity: 100,
            yPercent: -10
        });

        //WELCOME
       

        //TEXT ANIMATION
        gsap.fromTo(txtAnima.current,
            {opacity: 0,
            yPercent: 10,}, 
            {opacity: 100,
            yPercent: -10,
            scrollTrigger: {
                trigger: ".animation-text"
            }
        });

        //SERVICES
        gsap.to(".uiCard", {
            duration: 2.5,
            ease: "back.out(5)",
            xPercent: 5,
            delay: -.5,
            scrollTrigger: {
                trigger: ".line1"
            }
        });

        gsap.to(".webCard", {
            duration: 2.5,
            ease: "back.out(1.7)",
            xPercent: -5,
            delay: -.5,
            scrollTrigger: {
                trigger: ".line1"
            }
        });

        gsap.to (".illCard", {
            duration: 2.5,
            ease: "back.out(1.7)",
            xPercent: 5,
            delay: -.5,
            scrollTrigger: {
                trigger: ".line2"
            }
        });

        gsap.to(".graCard", {
            duration: 2.5,
            ease: "back.out(1.7)",
            xPercent: -5,
            delay: -.5,
            scrollTrigger: {
                trigger: ".line2"
            }
        });

    }, [])

  //Modal
  const { isOpen, toggle } = useModal();

  //translator
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  } 
  
  //Dark mode
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
        <div className='hero heroT heroTPro heroM' ref={hero}>
            <h1 ref={heroTitle}>nahualli.art</h1>
            <div className='heroDis' ref={heroDis}>
                <h4>{t("home.hero")}</h4>
                <button onClick={toggle}>{t("home.button-intro")}</button>
                <ModalAterriza isOpen={isOpen} toggle={toggle}>Open Modal</ModalAterriza>
            </div>
            <Hero/>
        </div>
        {/* WELCOME */}
        <div id="welcome" className='welcome welcomeT welcomeM'>
            <div className='welcome-text'>
                <h2>{t("home.welcome")}</h2>
                <p>{t("home.intro.1")}</p>
                <p>{t("home.intro.2")}</p>
            </div>
              <Welcome />
        </div>
        {/* TEXT DECORATION */}
        <div className='text-anima' ref={txtAnima}>
            <div className="animation-text">
                <h2>UI Designs - Web Design - Illustration - Graphic Design -</h2>
                <h2> UI Designs - Web Design - Illustration - Graphic Design</h2>
            </div>
        </div>
        {/* SERVICES */}
        <div id="work" className='work-section workT workM'>
            <div className='section line1'>
                <div className='work-card uiCard'>
                    <h4>{t("home.work.ui-design")}</h4>
                    <img src={uiuxImg} alt="decorative image"/>
                    <p>{t("home.work.ui-text")}</p>
                </div>
                <div className='work-card webCard'>
                    <h4>{t("home.work.web-design")}</h4>
                    <img src={webImg} alt="decorative image"/>
                    <p>{t("home.work.web-text")}</p>
                </div>
            </div>
            <div className='section line2'>
                <div className='work-card illCard'>
                    <h4>{t("home.work.illustration")}</h4>
                    <img src={illustraImg} alt="decorative image"/>
                    <p>{t("home.work.illustration-text")}</p>
                </div>
                <div className='work-card graCard'>
                    <h4>{t("home.work.graphic-design")}</h4>
                    <img src={graphicImg} alt="decorative image"/>
                    <p>{t("home.work.graphic-text")}</p>
                </div>
            </div>
        </div>

        {/* TEAM */}
        <div id="team" className='team-section teamT teamM'>
            <div className='members'>
                <div className='members-line'>
                    <div className='member-card'>
                        <img src={abiPic} alt="A draw of Abigail P"/>
                        <h3>Abigail P</h3>
                        <p>{t("home.team.sandra-text")}</p>
                    </div>
                    <div className='member-card'>
                        <img src={kitPic} alt="A draw of Kitzia P"/>
                        <h3>Kitzia P</h3>
                        <p>{t("home.team.kitzia-text")}</p>
                    </div>
                </div>
            </div>

            <div className='team-text'>
                <div className='text'>
                    <h2>{t("home.team.title")}</h2>
                    <p>{t("home.team.text")}</p>
                </div>
            </div>
        </div>
        {/* MORE MEMBERS */}
        <div className='more-members moreT moreM'>
            <div className='members-line'>
                <div className='member-card'>
                    <img src={ausiPic} alt="A draw of Aurora R"/>
                    <h3>Aurora R</h3>
                    <p>{t("home.team.sandra-text")}</p>
                </div>
                <div className='member-card'>
                    <img src={nekaPic} alt="A draw of Nekane"/>
                    <h3>Nekane</h3>
                    <p>{t("home.team.neka-text")}</p>
                </div>
                <div className='member-card'>
                    <img src={iduPic} alt="A draw of Diego Idu"/>
                    <h3>Diego Idu</h3>
                    <p>{t("home.team.idu-text")}</p>
                </div>
                <div className='member-card'>
                    <img src={galaPic} alt="A draw of Gala C"/>
                    <h3>Gala C</h3>
                    <p>{t("home.team.gala-text")}</p>
                
                </div>
            </div>
        </div>

        {/* SLIDER IT'S A COMPONENT */}
        <div>
            <Slider/>
        </div>
            
        {/* CTA */}
        <div id="contact" className='ctaSection ctaT ctaM'>
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

