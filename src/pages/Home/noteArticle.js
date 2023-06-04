import { useMemo } from 'react'
import noteImage from '../../assets/images/OBJECTS.png'
import Button from '../../components/Button/Button'


export default function NoteSection({data, lang}) {
    const style = useMemo(()=>{
        return {
            background: "none",
            color: "#56CCF2",
            display: "inlin-block",
            padding: 0
        }
    },[])
    
    return (
       <div className="noteSection d-flex">
            <div>
                <img src={noteImage} alt=""/>
            </div>
            <div className='noteTitle'>
                <h3>{data.title[lang]}</h3>
                <p>{data.description[lang]}</p>
                <ul>
                    <li>{data.text1[lang]}</li>
                    <li>{data.text2[lang]}</li>
                    <li>{data.text3[lang]}</li>
                </ul>
                <Button link="/notes" style={style} text={data.button[lang]}/>
            </div>
       </div>  
    )
}