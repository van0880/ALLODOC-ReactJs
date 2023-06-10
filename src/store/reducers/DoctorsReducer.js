const init_state_doctors = {all: [], filtered:[]}

const doctorsReducer = (state = init_state_doctors, action)=>{
    
    const { type, payload } = action
  
    switch (type) {
        case "upcoming":
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return new Date(item.near_date) < new Date() && item.near_date !== null
                })
            }
        case "passed":
            return {
                ...state,
                filtered: state.all.filter((item)=>{
                    return new Date(item.near_date) > new Date() && item.near_date !== null
                })
            }
        case "canceled":
            return {
                ...state,
                filtered: state.all.filter(item=>item.near_date === null)
            }
        case "init":
            return {
                    all: payload,
                    filtered: payload
                }
        default:
            return state
    }
}

export default doctorsReducer