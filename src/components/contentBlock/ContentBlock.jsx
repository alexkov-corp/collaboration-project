import React from "react";
import Routes from '../routes/Routes';
import TbLeft from '../TbLeft/TbLeft';
import TbRight from "../TbRight/tbRight";
import './cont-block.scss';


const ContentBlock =()=>{
    return(
        <div className="component-container">
            <TbLeft/>
            <Routes/>
            <TbRight/>
        </div>
    )
};
export  default ContentBlock;