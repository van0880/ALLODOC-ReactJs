
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function FooterNav({footerNav}){
    const {t} = useTranslation()
    return(
        <div className="footerNav">
            {
                footerNav.map((elem, i)=>{
                    return <Link key={i} to={elem.link}>{t(`footerNav.${i}.text`)}</Link>
                })
            }
        </div>
    )
}