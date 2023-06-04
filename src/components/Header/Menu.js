import { useContext } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import { Link } from "react-router-dom"


export default function Menu({show}) {
    const context = useContext(TranslateContext)
    const menu = context[0].menu
    const lang = context[1]
    console.log(menu[0].img)
    return (
        <div className={show ? "display menu" : "menu"}>
            {
                menu.map((elem) => {
                    return (
                        <Link to={elem.link} key={elem.id}>
                            <img src={elem.img} alt="" />
                            {elem.text[lang]}
                        </Link>
                    )
                })
            }
        </div>
    )
}