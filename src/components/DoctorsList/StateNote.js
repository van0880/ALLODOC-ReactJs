import clock from '../../assets/images/clock.png'
import calendarImg from '../../assets/images/calendar.png'
import videoImg from '../../assets/images/video.png'
import { useContext, useState } from 'react'
import { TranslateContext } from '../../contexts/TranslateContext'

export default function StateNote({doctor, lang}){
    const context = useContext(TranslateContext)
    const buttons = context[0].stateButton
    const [active, setActive] = useState(false)

    return (
        <div className='statNote flex-between'>
            <div>
                <p>
                    <img src={calendarImg} alt=""/>
                    <span>{doctor.date_birth}</span>
                </p>
                <p>
                  <img src={clock} alt=""/>
                  <span>16:00</span>
                </p>
                <p>
                    <img src={videoImg} alt=""/>
                    <span>Chat</span>
                </p>
            </div>
            <button className='stateNoteButton' 
                    onClick={()=>{setActive(!active)}}
                    style={active ? {"backgroundColor" : "#1BD741"} : {"backgroundColor" : ""}}>
                    {buttons[lang][active]} 
            </button>           
        </div>
    )
} 