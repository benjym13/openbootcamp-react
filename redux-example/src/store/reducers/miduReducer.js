import { COUNTER_INC, NEW_NOTE } from "../actions/miduAction";
import { createStore } from 'redux'

/* 
// 2. CREAMOS UN REDUCER QUE TIENE COMO PARAMAS EL ESTADO INICIAL Y LAS ACCIONES
//UN REDUCER ES UNA MÁQUINA DE ESTADO, TU ME PASAS UN ESTADO Y EL REDUCER DEVUELVE UN NUEVO ESTADO
 */
const initialState = 0;
export const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case COUNTER_INC :
            return state + 1
        default:
            return state
    }
}
