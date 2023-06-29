import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import i18n from "../../i18n"


export default function ProfileDoctor({doctor, i}) {
    const date = useMemo(()=>new Date(),[])
    const {t} = useTranslation()
    const experience = date.getFullYear() - doctor.excperience_start_year
    const translateExperience = {
        ru: `Стаж ${experience} лет`,
        ro: `Experienţă ${experience} ani`
    }
    const lang = i18n.language
    
    return (
        <>
            <img src={doctor.profile_image} alt='' />
            <div>
                <h4>{doctor.first_name + " " + doctor.last_name}</h4>
                <span>{ t(`doctors.${i}.user_categories.0.category.title`)}</span>
                <p>{translateExperience[lang]}</p>
            </div>
        </>
    )
}