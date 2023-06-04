import { useContext } from "react";
import DoctorsList from "../../components/DoctosList/DoctorsList";
import { TranslateContext } from "../../contexts/TranslateContext";

export default function MyNotes() {
    const context = useContext(TranslateContext)
    const lang = context[1]
    const doctors = context[0].results
    const filterButtons = context[0].filterButtons
    const title = {
        ru: "Мои записи",
        ro: "notitele mele"
    }
    return (
        <div className="container">
            <h2 className="notesTitle">{title[lang]}</h2>
            <DoctorsList data={doctors} filterButtons={filterButtons} lang={lang} />
        </div>
    )
}