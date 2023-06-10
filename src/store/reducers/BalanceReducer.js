const init_state_balance = {all: [], filtered:[]}

const balanceReducer = (state = init_state_balance, action)=>{
    
    const { type, payload } = action
  
    switch (type) {
        case "paid":
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return item.money > 0
                })
            }
        case "unpaid":
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return item.money < 0
                })
            }
        case "all":
            return {
                    all: payload,
                    filtered: payload
                }
        default:
            return state
    }
}

export default balanceReducer