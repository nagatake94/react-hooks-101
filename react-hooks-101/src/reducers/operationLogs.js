import { 
    ADD_ORERATION_LOG,
    DELETE_ALL_ORERATION_LOGS
 } from "../actions";

 const operationLogs = (state = [], action) => {
    switch (action.type){
        case ADD_ORERATION_LOG:
            const operationLog= {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [ operationLog , ...state]
        case DELETE_ALL_ORERATION_LOGS:
            return []
        default:
            return state;
    }
 }

 export default operationLogs;