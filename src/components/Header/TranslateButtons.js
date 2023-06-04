import { useContext, useState } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"


export default function TranslateButtons (){
    const [buttonStyle, setActive] = useState(true)
    const context = useContext(TranslateContext)
    const setLanguage = context[2]

    function selectLanguage(style, lang){
        setActive(!style)
        setLanguage(lang)
    }
    
    return (
        <div className="translate_buttons">
            <button type="button"
                onClick={()=>{selectLanguage(buttonStyle, "ru")}}
                className={buttonStyle ? "active" : ""}
                disabled={buttonStyle}>RU
            </button>
            <button type="button" 
                onClick={()=>{selectLanguage(buttonStyle, "ro")}}
                className={buttonStyle ? "" : "active"}
                disabled={!buttonStyle}>RO
            </button>
        </div>
    )
} 