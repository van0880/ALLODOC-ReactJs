import { useMemo } from 'react'
import noteImage from '../../assets/images/OBJECTS.png'
import Button from '../../components/Button/Button'
import { useTranslation } from 'react-i18next'


export default function NoteSection() {
    const style = useMemo(()=>{
        return {
            background: "none",
            color: "#56CCF2",
            display: "inlin-block",
            padding: 0
        }
    },[])
    const {t}= useTranslation()
    
    return (
       <div className="noteSection d-flex">
            <div>
                <img src={noteImage} alt=""/>
            </div>
            <div className='noteTitle'>
                <h3>{t("note.title")}</h3>
                <p>{t("note.description")}</p>
                <ul>
                    <li>{t("note.text1")}</li>
                    <li>{t("note.text2")}</li>
                    <li>{t("note.text3")}</li>
                </ul>
                <Button link="/notes" style={style} text={t("note.button")}/>
            </div>
       </div>  
    )
}