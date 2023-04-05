import React, { ReactNode } from "react";
import { useTranslation } from 'react-i18next';
import '../../styles/alerts.scss'

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function AterrizaSocio(props: ModalType) {

    //translator
    const { t, i18n } = useTranslation();

    const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
    } 

    return(
        <>
            {props.isOpen && (
                <div className="overlay" onClick={props.toggle}>
                    <div className='pop-up'>
                        <h3>{t("alerts.aterriza.titulo")}</h3>
                        <p>{t("alerts.aterriza.text")}</p>
                        <a href="aterrizatusideas.com/" target="_blank">Aterrizatusideas.com</a>
                    </div>
                </div>
            )}
        </>
    );
  }