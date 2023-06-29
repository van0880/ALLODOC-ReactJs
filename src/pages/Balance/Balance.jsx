import { useContext  } from "react"
import { TranslateContext } from "../../contexts/TranslateContext"
import Button from "../../components/Button/Button"
import BalanceHistory from "./BalanceHistory"
import './balance.css'
import {  useSelector } from "react-redux"
import { BalanceSelectors } from "../../store/selectors"
import { useTranslation } from "react-i18next"
import BalanceButtons from "./BalanceButtons"

export default function Balance() {
    const context = useContext(TranslateContext)
    const { balanceData } = context[0]
    const {t} = useTranslation()
    const balanceList = useSelector(BalanceSelectors.filteredBalance)

    return (
        <main>
            <div className="balance">
                <div className="container">
                    <h3 className="title">{t('balanceTitle.title')}</h3>
                    <div className="d-flex balanceTitle">
                        <h2>1058,68 &#8381;</h2>
                        <Button text={t('balanceTitle.button')} style={{ fontSize: "14px", padding: "13px 110px" }} />
                    </div>
                    <h5>{t('balanceTitle.history')}</h5>
                    <BalanceButtons data={balanceData}/>
                    <div className="allBalance">
                        {
                            balanceList.map((elem, i) => {
                                return <BalanceHistory key={i} data={elem} i={i} />
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}