import Button from '../Button/Button';
import  './doctorsList.css';
import StateNote from './StateNote';
import ProfileDoctor from '../ProfileDoctor/ProfileDoctor'
import { useTranslation } from 'react-i18next';

export default function DoctorContent({doctor, i}){
    const {t} = useTranslation()
    return(
        <div className='doctorElem' >
            <StateNote doctor={doctor} />
            <div className='flex-between'>
                <div className='doctorName d-flex'>                 
                   <ProfileDoctor doctor={doctor} i={i}/>
                </div>
                <div>
                    <Button text={t('viewEntryButton')} link={`doctors/${doctor.id}`}/>
                    <Button link={`doctors/${doctor.id}`}
                        text={t('viewRulingButton')}
                        style={{backgroundColor: "#F6F8FB", color: "#A7A7A7"} }/>
                </div>
            </div>
        </div>
    )
}