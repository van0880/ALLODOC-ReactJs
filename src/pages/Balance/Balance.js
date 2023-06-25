import { useCallback, useContext, useEffect, useState } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import Button from "../../components/Button/Button"
import BalanceHistory from "./BalanceHistory"
import './balance.css'
import { useDispatch, useSelector } from "react-redux"
import { BalanceActions } from "../../store/actions"
import { BalanceSelectors } from "../../store/selectors"

export default function Balance() {
    const context = useContext(TranslateContext)
    const {balanceTitle, balanceButtons, balanceData} = context[0]
    const lang = context[1]
    const [activeButton, setActive] = useState(1)

    const dispatch = useDispatch()
    
    const clickHandler = useCallback((red, number) => {
        dispatch(red)
        setActive(number)
    }, [dispatch, setActive])

    useEffect(() => {
        if (balanceData) {
            dispatch(BalanceActions.allBalance(balanceData))
        }
    }, [balanceData, dispatch])
  
    const balanceList = useSelector(BalanceSelectors.filteredBalance)

    return (
        <main>
            <div className="balance">
                <div className="container">
                    <h3 className="title">{balanceTitle.title[lang]}</h3>
                    <div className="d-flex balanceTitle">
                        <h2>1058,68 &#8381;</h2>
                        <Button text={balanceTitle.button[lang]} style={{ fontSize: "14px", padding: "13px 110px" }} />
                    </div>
                    <h5>{balanceTitle.history[lang]}</h5>
                    <div className="btn balanceBtn">
                        <button onClick={() => { clickHandler(BalanceActions.allBalance(balanceData), 1) }}
                            className={activeButton === 1 ? "activeBtn" : null}>
                            {balanceButtons.all[lang]}
                        </button>
                        <button onClick={() => { clickHandler(BalanceActions.paidBalance(1), 2) }}
                            className={activeButton === 2 ? "activeBtn" : null}>
                            {balanceButtons.paid[lang]}
                        </button>
                        <button onClick={() => { clickHandler(BalanceActions.unPaidBalance(1), 3) }}
                            className={activeButton === 3 ? "activeBtn" : null}>
                            {balanceButtons.unpaid[lang]}
                        </button>
                    </div>
                    <div className="allBalance">
                        {
                            balanceList.map((elem, i) => {
                                return <BalanceHistory key={i} data={elem} lang={lang} />
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}