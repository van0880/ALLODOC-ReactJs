import { useContext } from "react";
import DoctorsList from "../../components/DoctorsList/DoctorsList";
import { TranslateContext } from "../../contexts/TranslateContext";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function MyNotes() {
    const context = useContext(TranslateContext)
    const doctors =  useMemo(()=>context[0].results,[context])
    const {t} = useTranslation()
    return (
        <div className="container">
            <h2 className="notesTitle">{t('myNotes')}</h2>
            <DoctorsList data={doctors} />
        </div>
    )
}