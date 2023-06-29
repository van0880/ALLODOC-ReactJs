import { useContext } from "react";
import { TranslateContext } from "../../contexts/TranslateContext";
import DoctorName from "./DoctorName";
import './doctorProfile.css'
import { useParams } from "react-router-dom";
import FullDescrip from "./FullDescrip";



export default function DoctorsProfile() {
    const context = useContext(TranslateContext)
    const { userId } = useParams()
    const alldoctors = context[0].doctors
    const ind = alldoctors.findIndex(elem => elem.id === Number(userId))
    const doctor = alldoctors[ind]

    return (
        <main>
            <DoctorName doctor={doctor} i={ind} />
            <div className="container">
                <div className="d-flex fullDescrip">
                    <div>
                        <FullDescrip doctor={doctor}  i={ind} />
                    </div>
                </div>
            </div>
        </main>
    )
}