import logo from '../../assets/images/logoFooter.png'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom'


export default function FooterLogo({footerText, lang}){
 
    return (
        <div className="footerLogo">
            <Link to="/" >
                <img src={logo} alt=''/>
            </Link>    
                <p>{footerText[lang]}</p>
            <SocialLinks/>
        </div>
    )
}