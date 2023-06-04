import { useMemo } from "react"
import ProfileDoctor from "../../components/profileDoctor/ProfileDoctor"


export default function DoctorName({ doctor, lang, translatePage }) {
    const date = useMemo(() => new Date(), [])
    const experience = date.getFullYear() - doctor.excperience
    const translate = {
        ru: `Стаж ${experience} лет`,
        ro: `Experienţă ${experience} ani`
    }
    return (
        <div className="profileDoctor">
            <div className="container">
                <span className="path">
                   {translatePage.path[lang]} / {doctor.title[lang]} 
                </span>
                <div className='flex-between'>
                    <div className='d-flex profileNames'>
                        <ProfileDoctor  doctor={doctor} lang={lang} translate={translate}/>
                    </div>
                    <div>
                        <p>{doctor.price} R {translatePage.consultation[lang]}</p>
                        <p>30 {lang === "ru" ? "минут" : "minute"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}