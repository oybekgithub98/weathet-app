export const initialState = {
    searchValue: ""
}

const reducer = (state, action) => {
    switch(action.type){
        case "SEARCH":
            return {
                ...state,
                searchValue: action.searchValue
            }
        default:
            return state
    }
}

export default reducer