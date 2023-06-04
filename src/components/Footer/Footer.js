import { useContext } from "react";
import FooterLogo from "./FooterLogo";
import './footer.css'
import { TranslateContext } from "../../contexts/TranslateContext";
import FooterNav from "./FooterNav";
import FooterContacts from "./FooterContacts";

export default function Footer(){
    const context = useContext(TranslateContext)
    const footerNav = context[0].footerNav 
    const lang = context[1]
    const footerText = context[0].footerText

    return(
        <footer>
            <div className="container">
                <div className="footer d-flex">
                    <FooterLogo footerText={footerText} lang={lang}/>
                    <FooterNav footerNav={footerNav} lang={lang}/>
                    <FooterContacts/>
                </div>
            </div>
        </footer>
    )
}