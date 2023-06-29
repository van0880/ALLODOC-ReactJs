import { useState } from "react"

import i18n from "../../i18n"
export default function TranslateButtons (){
    const lang = i18n.language
    const bool = lang === "ro" ? false : true
    const [buttonStyle, setActive] = useState(bool)
    
    function selectLanguage(style, lang){
        i18n.changeLanguage(lang)
        setActive(!style)
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