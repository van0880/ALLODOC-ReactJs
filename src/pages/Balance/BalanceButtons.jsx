import { useTranslation } from "react-i18next"
import { BalanceActions } from "../../store/actions"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function BalanceButtons({data}) {
    const {t} = useTranslation()
    const [activeButton, setActive] = useState(1)
    const dispatch = useDispatch()
    const clickHandler = useCallback((red, number) => {
        dispatch(red)
        setActive(number)
    }, [dispatch, setActive])
    
    useEffect(() => {
        if (data) {
            dispatch(BalanceActions.allBalance(data))
        }
    }, [data, dispatch])
    return (
        <div className="btn balanceBtn">
            <button onClick={() => { clickHandler(BalanceActions.allBalance(data), 1) }}
                className={activeButton === 1 ? "activeBtn" : null}>
                {t('balanceButtons.all')}
            </button>
            <button onClick={() => { clickHandler(BalanceActions.paidBalance(1), 2) }}
                className={activeButton === 2 ? "activeBtn" : null}>
                {t('balanceButtons.paid')}
            </button>
            <button onClick={() => { clickHandler(BalanceActions.unPaidBalance(1), 3) }}
                className={activeButton === 3 ? "activeBtn" : null}>
                {t('balanceButtons.unpaid')}
            </button>
        </div>
    )
}