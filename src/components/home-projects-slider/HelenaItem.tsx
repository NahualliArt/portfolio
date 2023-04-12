import React from 'react';
//import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import '../../styles/slider.scss'

function HelenaItem() {
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
                <h3>Helena Fernández-Cavada - Artist Website</h3>
                <div className='chip'>
                    <p>Web Design</p>
                    <p>Cargo.site</p>
                </div>
                <p>{t("sliders-projects.helenafc-slider.text")}</p>

                <Link to={'helenafc.com/'} target="_blank" rel="noopener noreferrer">
                    <button>{t("sliders-projects.see-more")}</button>
                </Link>
                                
            </div>
            <div className='projectImg'>
                <div className='smallImages'>
                    <img src='https://cdn.dribbble.com/userupload/6151958/file/original-6407efac6b414b45b99a89e6a3ce1754.png?compress=1&resize=1366x768' alt='Cover photo from Helena website'/>
                    <img src='https://cdn.dribbble.com/userupload/6151959/file/original-ebc3f7404d099dc95cb59e90339ee268.png?compress=1&resize=1366x768' alt='Cover photo from Helena website'/>
                </div>
                <div className='smallImages'>
                    <img src='https://cdn.dribbble.com/userupload/6151957/file/original-6f75a9a6aab57cda6eb421d9c4620163.png?compress=1&resize=1366x768' alt='Cover photo from Helena website'/>
                    <img src='https://cdn.dribbble.com/userupload/6151956/file/original-fef8bd620e2857cc689708de92947993.png?compress=1&resize=1366x768' alt='Cover photo from Helena website'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default HelenaItem;