import { useContext } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import { Link } from "react-router-dom"

export default function Navbar (){
    const data = useContext(TranslateContext)
    const navMenu = data[0].navMenu
    const lang = data[1]
    return (
        <div>
            <ul>
                {
                    navMenu.map((elem, i)=>{
                        return(
                            <li key={i}>
                                <Link to={elem.link}>{elem.text[lang]}</Link>
                            </li>
                        )                                         
                    })
                }
            </ul>
        </div>
    )
}