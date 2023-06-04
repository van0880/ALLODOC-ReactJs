import calendar from '../../assets/images/appointment.png'
import obraz from '../../assets/images/obraz.png'
import plyus from '../../assets/images/plyus.png'
import dopal from '../../assets/images/dopal.png'


export default function FullDescrip({ doctor, lang, translatePage }) {
    console.log(doctor,translatePage)
    return (
        <>
            <div className="fullDescrip_elem">
                <img src={calendar} alt=""  />
                <h5>{translatePage.nextEntry[lang]}</h5>
                <p>{doctor.near_date}</p>
            </div>
            <div className="fullDescrip_elem">
                <img src={obraz} alt="" />
                <h5>{translatePage.education[lang]}</h5>
                <p>Вторник 03 Марта</p>
            </div>
            <div className="fullDescrip_elem">
                <img src={plyus} alt="" />
                <h5>{translatePage.specializes[lang]}</h5>
                <p>{doctor.user.description[lang]}</p>
            </div>
            <div className="fullDescrip_elem">
                <img src={dopal} alt="" />
                <h5>{translatePage.additionally[lang]}</h5>
                <p dangerouslySetInnerHTML={{ __html: doctor.user.full_description[lang]}}/>
            </div>
        </>

    )
}