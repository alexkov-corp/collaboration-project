import {NAVIGATION} from "../constants/navigation-constants";
export const  actionNavElementItem =(title)=>{

 return {
     type:NAVIGATION,
     payload:{title}
 }
};