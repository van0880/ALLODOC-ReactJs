import { useContext } from "react";
import { TranslateContext } from "../../contexts/TranslateContext";
import DoctorName from "./DoctorName";
import './doctorProfile.css'
import { useParams } from "react-router-dom";
import FullDescrip from "./FullDescrip";


export default function DoctorsProfile() {
    const context = useContext(TranslateContext)
    const { userId } = useParams()
    const translatePage = context[0].doctorProfile
    const lang = context[1]
    const doctor = context[0].results.find(elem => elem.id === Number(userId))

    return (
        <main>
            <DoctorName doctor={doctor} translatePage={translatePage} lang={lang} />
            <div className="container">
                <div className="d-flex fullDescrip">
                    <div>
                        <FullDescrip doctor={doctor} translatePage={translatePage} lang={lang} />
                    </div>
                </div>
            </div>

        </main>
    )
}