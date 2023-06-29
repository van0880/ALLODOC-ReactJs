import { useContext } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"


export default function Menu({show}) {
    const context = useContext(TranslateContext)
    const menu = context[0].menu
    const {t} = useTranslation()
    return (
        <div className={show ? "display menu" : "menu"}>
            {
                menu.map((elem, i) => {
                    return (
                        <Link to={elem.link} key={elem.id}>
                            <img src={elem.img} alt="" />
                            {t(`menu.${i}.text`)}
                        </Link>
                    )
                })
            }
        </div>
    )
}