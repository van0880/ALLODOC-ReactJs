export default function ProfileDoctor({doctor, lang, translate}) {
    return (
        <>
            <img src={doctor.img} alt='' />
            <div>
                <h4>{doctor.name}</h4>
                <span>{doctor.title[lang]}</span>
                <p>{translate[lang]}</p>
            </div>
        </>
    )
}