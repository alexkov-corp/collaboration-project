import {SINGLE_PAGE_NAVIGATION} from "../constants/navigation-constants";
  export  const  actionNavElementItem =(title)=>{
    return {
     type:SINGLE_PAGE_NAVIGATION,
     payload:{title}
 }
};

