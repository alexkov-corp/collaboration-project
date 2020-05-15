import {
    NAVIGATION,
    INITIAL_STATE
} from "../constants/navigation-constants";

const  navigationReducer =(state = INITIAL_STATE , action)=>{
    const {type,payload}= action;
    switch (type) {
        case NAVIGATION:
            return payload;
        default:
            return state;
    }
};

export default navigationReducer;