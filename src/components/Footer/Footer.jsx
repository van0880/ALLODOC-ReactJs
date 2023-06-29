import { useContext } from "react";
import FooterLogo from "./FooterLogo";
import './footer.css'
import { TranslateContext } from "../../contexts/TranslateContext";
import FooterNav from "./FooterNav";
import FooterContacts from "./FooterContacts";
import { useTranslation } from "react-i18next";

export default function Footer(){
    const context = useContext(TranslateContext)
    const footerNav = context[0].footerNav 
    const {t} = useTranslation()

    return(
        <footer>
            <div className="container">
                <div className="footer d-flex">
                    <FooterLogo footerText={t('footerText')} />
                    <FooterNav footerNav={footerNav} />
                    <FooterContacts/>
                </div>
            </div>
        </footer>
    )
}