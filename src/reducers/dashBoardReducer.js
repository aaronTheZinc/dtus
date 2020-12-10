import * as actions from "../Actions/dashBoardAction"

const initialState = {
    isLoading: false,
    orders: []
}

export const dashBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: action.data
            }
        case actions.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
