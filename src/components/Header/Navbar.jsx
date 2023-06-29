import { useContext } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Navbar (){
    const context = useContext(TranslateContext)
    const navMenu = context[0].navMenu
    const {t} = useTranslation()
    return (
        <div>
            <ul>
                {
                    navMenu.map((elem, i)=>{
                        return(
                            <li key={i}>
                                <NavLink to={elem.link}>{t(`navMenu.${i}.text`)}</NavLink>
                            </li>
                        )                                         
                    })
                }
            </ul>
        </div>
    )
}