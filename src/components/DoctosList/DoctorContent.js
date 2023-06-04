import { useMemo } from 'react';
import Button from '../Button/Button';
import  './doctorsList.css';
import StateNote from './StateNote';
import ProfileDoctor from '../profileDoctor/ProfileDoctor'
export default function DoctorContent({doctor, lang}){
    const date = useMemo(()=>new Date(),[])
    const experience = date.getFullYear() - doctor.excperience
    const translate = {
        ru: `Стаж ${experience} лет`,
        ro: `Experienţă ${experience} ani`
    }
    return(
        <div className='doctorElem' to="14">
            <StateNote doctor={doctor} lang={lang}/>
            <div className='flex-between'>
                <div className='doctorName d-flex'>                 
                   <ProfileDoctor doctor={doctor} lang={lang} translate={translate}/>
                </div>
                <div>
                    <Button text={lang === "ru" ? "Посмотреть запись" : "Vedeți intrarea"} link={`doctors/${doctor.id}`}/>
                    <Button link={`doctors/${doctor.id}`}
                        text={lang === "ru" ? "Посмотреть постановление" : "Vedeți intrarea"}
                        style={{backgroundColor: "#F6F8FB", color: "#A7A7A7"} }/>
                </div>
            </div>
        </div>
    )
}