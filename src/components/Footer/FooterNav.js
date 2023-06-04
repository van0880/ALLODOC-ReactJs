
import { Link } from "react-router-dom"

export default function FooterNav({footerNav, lang}){
    return(
        <div className="footerNav">
            {
                footerNav.map((elem, i)=>{
                    return <Link key={i} to={elem.link}>{elem[lang]}</Link>
                })
            }
        </div>
    )
}