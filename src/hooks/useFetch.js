import axios from "axios";
import { useEffect, useReducer } from "react";

const initialstate = { data: null, loading: false, error: null };

const action = {
  API_CALL: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const reducer = (state, { type, payload }) => {
    // console.log(payload)
  switch (type) {
    case action.API_CALL:
      return { ...state, loading: true,data:null,error:null };
    case action.FETCH_DATA:
        return {...state,loading:false,data:payload}
    case action.ERROR:
        return {...state,error:payload,loading:false,data:[]}

    default:
      return state;
  }
};

function useFetch(url,onDownloadProgress) {
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    dispatch({ type: action.API_CALL });
    axios
      .get(url,{onDownloadProgress})
      .then((res) => {
        dispatch({ type: action.FETCH_DATA, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: action.ERROR, payload: err.message });
      });
  }, [url]);
  return state;
}

export default useFetch;
