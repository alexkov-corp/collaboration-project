import {
    SINGLE_PAGE_NAVIGATION,
    INITIAL_STATE
} from "../constants/navigation-constants";

const  navigationReducer =(state = INITIAL_STATE , action)=>{
    const {type,payload}= action;
    switch (type) {
        case SINGLE_PAGE_NAVIGATION:
            return {...state, title:payload.title };
        default:
            return state;
    }
};

export default navigationReducer;