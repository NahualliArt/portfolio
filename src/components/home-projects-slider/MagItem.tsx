import React from 'react';
//import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import '../../styles/slider.scss'

function MagItem() {
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
                <h3>Moto Arte Garage</h3>
                <div className='chip'>
                    <p>Web Design</p>
                    <p>WordPress</p>
                </div>
                <p>{t("sliders-projects.mag-slider.text")}</p>

                <Link to={'motoartegarage.com/'}>
                    <button>{t("sliders-projects.see-more")}</button>
                </Link>
                                
            </div>
            <div className='projectImg'>
                <div className='smallImages'>
                    <img src='https://cdn.dribbble.com/users/2307112/screenshots/18259767/media/8f48f73dc9e630c184940775ba11692b.png?compress=1&resize=1600x1200&vertical=top' alt='Cover photo from Moto Arte Garage website'/>
                    <img src='https://cdn.dribbble.com/users/2307112/screenshots/18259767/media/91265a0817fa1190b044fe75e2539b45.png?compress=1&resize=1600x1200&vertical=top' alt='Cover photo from Moto Arte Garage website'/>
                </div>
                <div className='smallImages'>
                    <img src='https://cdn.dribbble.com/users/2307112/screenshots/18259767/media/9fb2c9ca11982a3fbbd4a94fb06c79a2.png?compress=1&resize=1600x1200&vertical=top' alt='Cover photo from Moto Arte Garage website'/>
                    <img src='https://cdn.dribbble.com/users/2307112/screenshots/18259767/media/464170742d8c0c48ec6034a7f99fe1f4.png?compress=1&resize=1600x1200&vertical=top' alt='Cover photo from Moto Arte Garage website'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default MagItem;