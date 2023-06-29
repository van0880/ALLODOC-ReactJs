import { useContext} from "react";
import { TranslateContext } from "../../contexts/TranslateContext";

import './home.css'
import NoteSection from "./NoteSection";
import Button from "../../components/Button/Button";
import DoctorsList from "../../components/DoctorsList/DoctorsList";
import MainSection from "./MainSection";
import { useTranslation } from "react-i18next";

export default function Home() {
    const context = useContext(TranslateContext)
    const {t}= useTranslation()
    const {doctors} = context[0]

    return (
        <main>
            <div className="container">
                <MainSection/>
                <NoteSection />
                <div className="text-center">
                    <Button link="/notes" text={t('note.noteButton')} style={{color: "#4F4F4F", fontWeight: "400"}} />
                </div>
                <DoctorsList data={doctors} />
            </div>
        </main>
    );
}

