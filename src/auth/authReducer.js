// const state = {
//     name: 'Sergio',
//     logged: false
// }

import { types } from "../types/typex";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                name: action.payload.name,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}