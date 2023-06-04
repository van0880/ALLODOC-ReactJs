import { useCallback, useMemo, useReducer, useState } from "react"
import DoctorContent from "./DoctorContent"

export default function DoctorsList({ filterButtons, lang, data }) {
    const today = useMemo(() => new Date(), [])
    const [activeButton, setActive] = useState(0)
    
    const clickHandler = useCallback((obj, number) => {
        dispatch(obj)
        setActive(number)
    }, [])

    const reducer = useCallback(function (state, action) {
        let { type, payload } = action
        switch (type) {
            case "upcoming":
                return payload.filter((item) => {
                    let userDate = new Date(item.near_date)
                    return userDate < today && item.near_date !== null
                })
            case "passed":
                return payload.filter((item) => {
                    let userDate = new Date(item.near_date)
                    return userDate > today && item.near_date !== null
                })
            case "canceled":
                return payload.filter(item => item.near_date === null)

            default:
                return payload
        }
    }, [today])
    const [doctors, dispatch] = useReducer(reducer, data)

    return (
        <div className="noteList">
            <div className="btn">
                <button onClick={() => { clickHandler({ type: "upcoming", payload: data }, 1) }}
                    className={activeButton === 1 ? "activeBtn" : null}>
                    {filterButtons.button1[lang]}
                </button>
                <button onClick={() => { clickHandler({ type: "passed", payload: data }, 2) }}
                    className={activeButton === 2 ? "activeBtn" : null}>
                    {filterButtons.button2[lang]}
                </button>
                <button onClick={() => { clickHandler({ type: "canceled", payload: data }, 3) }}
                    className={activeButton === 3 ? "activeBtn" : null}>
                    {filterButtons.button3[lang]}
                </button>
            </div>
            <div className="list">
                {
                    doctors.map((elem) => {
                        return <DoctorContent key={elem.id} doctor={elem} lang={lang} />
                    })
                }
            </div>
        </div>
    )
}