import { 
    ADD_ORERATION_LOG,
    DELETE_ALL_ORERATION_LOGS
 } from "../actions";

 const operaitonLogs = (state = [], action) => {
    switch (action.type){
        case ADD_ORERATION_LOG:
            const operaitonLog= {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [ operaitonLog ,...state];
        case DELETE_ALL_ORERATION_LOGS:
            return [];
        default:
            return state;
    }
 }

 export default operaitonLogs;