import {createStore} from "redux";
import {baseReducer} from "../reduser";

export let store = createStore(baseReducer);
