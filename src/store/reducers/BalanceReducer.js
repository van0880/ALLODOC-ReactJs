import { BalanceTypes } from "../types"
const init_state_balance = {all: [], filtered:[]}


export default function BalanceReducer(state = init_state_balance, action) {  
    const {type, payload} = action
  
    switch (type) {
        case BalanceTypes.PAID:
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return item.money > 0
                })
            }
        case BalanceTypes.UNPAID:
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return item.money < 0
                })
            }
        case BalanceTypes.ALL:
            return {
                    all: payload,
                    filtered: payload
                }
        default:
            return state
    }
}
