import {DEC, INC} from "./base.actions";
import {RESET} from "./base.actions";

export const decrement = () => {
    return {type:DEC, payload:3}
}

export const increment = () => {
    return {type:INC, payload:2}
}

export const reset = () => {
    return{type:RESET};
}