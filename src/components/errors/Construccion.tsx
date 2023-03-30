
//construccion.tsx
import '../../styles/App.scss'
import styled from "styled-components";
import footerGif from '../../assets/animations/footer-optimize.gif';
import { useTranslation } from 'react-i18next';


//Styles
const Wrapper = styled.section`
  padding: 4em;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #CDCDCD;
`;


const Image = styled.div`
    background-image: url(${footerGif});
    background-size: cover;
    width: 400px;
    height: 400px;
    margin: auto;
`;

function Construccion() {

    //Trasnlator
    const { t, i18n } = useTranslation();

    const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    }

    return(
        <>
        <Wrapper>
            <Title>{t("errors.cooming")}</Title>
            <Image/>
        </Wrapper>
        </>
    );
};

export default Construccion;