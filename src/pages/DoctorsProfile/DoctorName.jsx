
import { useTranslation } from "react-i18next"
import ProfileDoctor from "../../components/ProfileDoctor/ProfileDoctor"


export default function DoctorName({ doctor, i}) {
   const {t} = useTranslation()
   
    return (
        <div className="profileDoctor">
            <div className="container">
                <span className="path">
                   {t('doctorProfile.path')} / {t(`doctors.${i}.title`)} 
                </span>
                <div className='flex-between'>
                    <div className='d-flex profileNames'>
                        <ProfileDoctor  doctor={doctor} i={i}/>
                    </div>
                    <div>
                        <p>{doctor.price} R {t('doctorProfile.consultation')}</p>
                        <p>30 {t('minute')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}