import React, {useContext,useState} from "react";

import { 
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_ORERATION_LOG,
    DELETE_ALL_ORERATION_LOGS
 } from "../actions";

 import AppContext from "../contexts/AppContext";
 import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
    const {state, dispatch} = useContext(AppContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });

    dispatch({
        type: ADD_ORERATION_LOG,
        description: "イベントを作成しました。",
        operatedAt: timeCurrentIso8601()
    });

    setTitle("");
    setBody("");
  }

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm("本当に全てのイベントを削除しますか？");
    if (result){
        dispatch({type: DELETE_ALL_EVENTS});

        dispatch({
            type: ADD_ORERATION_LOG,
            description: "全てのイベントを削除しました。",
            operatedAt: timeCurrentIso8601()
        })
    } 
  }

  const unCreatable = title === "" || body === "" ;
  
  
  const deleteAllOperationLogs = e => {
      e.preventDefault();
      const result = window.confirm("本当に全ての操作ログを削除しますか？");

      if (result){
          dispatch({
              type: DELETE_ALL_ORERATION_LOGS
          })
      }
  }

    return(
        <React.Fragment>
            <h4>イベント作成フォーム</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="formEventTitle">タイトル</label>
                        <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEventBody">ボディー</label>
                        <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
                    </div>
                    <br/>
                    <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                    <>&nbsp;</>
                    <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
                    <>&nbsp;</>
                    <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
                </form>
        </React.Fragment>
    );
} ;

export default EventForm;

