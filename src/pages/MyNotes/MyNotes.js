import { useContext } from "react";
import DoctorsList from "../../components/DoctorsList/DoctorsList";
import { TranslateContext } from "../../contexts/TranslateContext";
import { useMemo } from "react";

export default function MyNotes() {
    const context = useContext(TranslateContext)

    const lang = useMemo(()=>context[1],[context])
    const doctors =  useMemo(()=>context[0].results,[context])
    const filterButtons = useMemo(()=>context[0].filterButtons,[context])
    
    return (
        <div className="container">
            <h2 className="notesTitle">{context[0].myNotes[lang]}</h2>
            <DoctorsList data={doctors} filterButtons={filterButtons} lang={lang} />
        </div>
    )
}