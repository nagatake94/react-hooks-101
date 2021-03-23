import {  combineReducers } from "redux";

import events from "./events";
import operaitonLogs from "./operationLogs";

export default combineReducers({
    events,
    operaitonLogs
});