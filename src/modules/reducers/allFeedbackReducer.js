let allFeedbackObject = {
    feeling: 0,
    understanding: 0,
    supported: 0,
    comments: ''
}

const allFeedbackReducer = (state = allFeedbackObject, action) => {

    if(action.type ==="SET_FEELING") {
        return {
            ...state,
            feeling: action.payload
        }
    }

    if(action.type ==="SET_UNDERSTANDING") {
        return {
            ...state,
            understanding: action.payload
        }
    }

    if(action.type ==="SET_SUPPORTED") {
        return {
            ...state,
            supported: action.payload
        }
    }

    if(action.type ==="SET_COMMENTS") {
        return {
            ...state,
            comments: action.payload
        }
    }

    if(action.type ==="CLEAR_FEEDBACK") {
        return {
            ...allFeedbackObject
        }
    }

    return state;
}

export default allFeedbackReducer;