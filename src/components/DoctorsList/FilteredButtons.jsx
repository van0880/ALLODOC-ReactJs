import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { DoctorActions } from "../../store/actions"
import { t } from "i18next"

export default function FilteredButtons({data}) {
    const [activeButton, setActive] = useState(0)
    const dispatch = useDispatch()
    const clickHandler = useCallback((reduc, number) => {
        dispatch(reduc)
        setActive(number)
    }, [dispatch])
   
    useEffect(()=>{ 
        if (data){
            dispatch(DoctorActions.initDoctor(data))
        }
    },[data, dispatch])
    return (
        <div className="btn">
            <button onClick={() => { clickHandler(DoctorActions.upcomingDoctor(1), 1) }}
                className={activeButton === 1 ? "activeBtn" : null}>
                {t("filterButtons.button1")}
            </button>
            <button onClick={() => { clickHandler(DoctorActions.passedDoctor(1), 2) }}
                className={activeButton === 2 ? "activeBtn" : null}>
                {t("filterButtons.button2")}
            </button>
            <button onClick={() => { clickHandler(DoctorActions.canceledDoctor(1), 3) }}
                className={activeButton === 3 ? "activeBtn" : null}>
                {t("filterButtons.button3")}
            </button>
        </div>
    )
}