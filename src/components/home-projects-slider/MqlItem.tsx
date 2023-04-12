import React from 'react';
//import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import '../../styles/slider.scss'

function MqlItem() {
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
                <h3>Masquelearning</h3>
                <p>Gamification and engagement design</p>
                <div className='chip'>
                    <p>Web Design</p>
                    <p>WordPress</p>
                    <p>Illustration</p>
                </div>
                <p>{t("sliders-projects.mql-slider.text")}</p>

                <Link to={'https://www.masquelearning.com/'} target="_blank" rel="noopener noreferrer">
                    <button>{t("sliders-projects.see-more")}</button>
                </Link>
                                
            </div>
            <div className='projectImg'>
                <div className='smallImages'>
                    <img src='https://cdn.dribbble.com/userupload/4753569/file/original-66ddd4f20f4dd3bf5d340782f4596b0e.png?compress=1&resize=1200x675' alt='Cover photo from Masquelearning website'/>
                    <img src='https://cdn.dribbble.com/userupload/4753571/file/original-a9404250c0d2f0fc6ecdebdccc3b99ef.png?compress=1&resize=2048x1151&vertical=center' alt='Cover photo from Masquelearning website'/>
                </div>
                <div className='smallImages'>
                    <img src='https://cdn.dribbble.com/userupload/4753570/file/original-e684834e8e0bd7c7ba282e06d2a816e4.png?compress=1&resize=2048x1151&vertical=center' alt='Cover photo from Masquelearning website'/>
                    <img src='https://cdn.dribbble.com/userupload/6217338/file/original-e8fa340659c010c7c4d3323d78e0a463.png?compress=1&resize=1366x768' alt='Cover photo from Masquelearning website'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default MqlItem;