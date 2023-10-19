import {DECREMENT, INCREMENT} from "./constants";


export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});