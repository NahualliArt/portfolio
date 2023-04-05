import React, { ReactNode } from "react";
import '../../styles/alerts.scss'

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function AterrizaSocio(props: ModalType) {
    return(
        <>
            {props.isOpen && (
                <div className="overlay" onClick={props.toggle}>
                    <div className='pop-up'>
                        <h3>Somos Parters!!</h3>
                        <p>Trabajamos en asociación comunitatia con</p>
                        <a>Aterrizatusideas.com</a>
                    </div>
                </div>
            )}
        </>
    );
  }