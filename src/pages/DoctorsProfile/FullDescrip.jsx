import calendar from '../../assets/images/appointment.png'
import obraz from '../../assets/images/obraz.png'
import plyus from '../../assets/images/plyus.png'
import dopal from '../../assets/images/dopal.png'
import { useTranslation } from 'react-i18next'


export default function FullDescrip({ doctor, i }) {
    const {t} = useTranslation()
    return (
        <>
            {doctor.near_date && <div className="fullDescrip_elem">
                <img src={calendar} alt=""  />
                <h5>{t('doctorProfile.nextEntry')}</h5>
                <p>{doctor.near_date}</p>
            </div>}
            <div className="fullDescrip_elem">
                <img src={obraz} alt="" />
                <h5>{t('doctorProfile.education')}</h5>
                <p>Вторник 03 Марта</p>
            </div>
            <div className="fullDescrip_elem">
                <img src={plyus} alt="" />
                <h5>{t('doctorProfile.specializes')}</h5>
                <p>{t(`doctors.${i}.user_categories.0.category.description`)}</p>
            </div>
            <div className="fullDescrip_elem">
                <img src={dopal} alt="" />
                <h5>{t('doctorProfile.additionally')}</h5>
                <p dangerouslySetInnerHTML={{ __html: t(`doctors.${i}.user_categories.0.category.full_description`)}}/>
            </div>
        </>

    )
}