import { ALL, PAID, UNPAID } from "../types/BalanceTypes"


const allBalance = (payload)=>{
    return {
        type: ALL,
        payload
    }
}

const paidBalance = (payload) =>{
    return {
        type: PAID,
        payload
    }
}

const unPaidBalance = (payload) =>{
    return {
        type: UNPAID,
        payload
    }
}

export{
    allBalance,
    paidBalance,
    unPaidBalance
}