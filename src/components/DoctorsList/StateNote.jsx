import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DoctorContacts from './DoctorContacts'

export default function StateNote({doctor}){
    const [active, setActive] = useState(false)
    const {t} = useTranslation()
    const birth = doctor.date_of_birth
    return (
        <div className='statNote flex-between'>
            <DoctorContacts birth={birth}/>
            <button className='stateNoteButton' 
                    onClick={()=>{setActive(!active)}}
                    style={active ? {"backgroundColor" : "#1BD741"} : {"backgroundColor" : ""}}>
                    {t(`stateButton.${active}`)} 
            </button>           
        </div>
    )
} 