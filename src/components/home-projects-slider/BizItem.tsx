import React from 'react';
//import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import '../../styles/slider.scss'

import img1 from "../../assets/projects/bizbud/app-2.webp";
import img2 from "../../assets/projects/bizbud/app-preview.webp";
import img3 from "../../assets/projects/bizbud/mockup-web-app_1.webp";
import img4 from "../../assets/projects/bizbud/mockup-web_1.webp";

function BizItem() {
        //translator
        const { t, i18n } = useTranslation();

        const onClickLanguageChange = (e: any) => {
            const language = e.target.value;
            i18n.changeLanguage(language);
        }
    return(
        <>
        <div className='sliderBg'>
            <div className='projectText'>
                <h3>Bizbud</h3>
                <div className='chip'>
                    <p>Web Design</p>
                    <p>WordPress</p>
                    <p>App Design</p>
                    <p>Figma</p>
                </div>
                <p>{t("sliders-projects.bizbud-slider.text")}</p>

                <Link to={'../errors/Construccion'}>
                    <button>{t("sliders-projects.see-more")}</button>
                </Link>
                                
            </div>
            <div className='projectImg'>
                <div className='smallImages'>
                    <img src={img4} alt='Cover photo from Moto Arte Garage website'/>
                    <img src={img3} alt='Cover photo from Moto Arte Garage website'/>
                </div>
                <div className='smallImages'>
                    <img src={img2} alt='Cover photo from Moto Arte Garage website'/>
                    <img src={img1} alt='Cover photo from Moto Arte Garage website'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default BizItem;