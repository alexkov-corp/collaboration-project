import React from "react";
import './tbLeft.css';
import {connect} from "react-redux";

const TbLeft = (props) => {
    const {navigationReducer}=props;
    return (
        <div className='left-block'>
            <span>{navigationReducer.title}</span>
        </div>
    )
};

const mapStateToProps=(store)=>{
    const {navigationReducer} = store;

    return {
        navigationReducer
    };
};
export default connect(mapStateToProps)(TbLeft)