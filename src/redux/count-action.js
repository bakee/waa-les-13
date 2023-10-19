import {DECREMENT, INCREMENT} from "./constants";


export const createIncrementAction = data => ({type: INCREMENT, data});
// export function createIncrementAction(data){ //synchronous
//     return ({type: INCREMENT, data});
// }
export const createDecrementAction = data => ({type: DECREMENT, data});

export const createIncrementAsyncAction = (data, time) => dispatch => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };


// export function createIncrementAsyncAction(data, time) {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch(createIncrementAction(data));
//         }, time);
//     }
// }
