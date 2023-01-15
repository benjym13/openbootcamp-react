import React from 'react'
/* import { counterIncremented } from '../store/actions/miduAction'
import { createCounterStore } from '../store/config/miduStore' */
import { createStore } from 'redux'

const Counter = () => {

    const COUNTER_INC = '@counter/INCREMENTED';

    const incremented = {
        type: COUNTER_INC,
        payload: 13
    }
    // CREAMOS UN REDUCER QUE TIENE COMOS PARAMAS EL ESTADO INICIAL Y LAS ACCIONES
    const counterReducer = (state= 0, action) => {
        switch (action.type) {
            case COUNTER_INC:
                return state + action.payload
            default:
                return state
        }
    }
    //CREAMOS EL STORE QUE RECIBE COMO PARMS EL REDUCER
    let store = createStore(counterReducer);
    const dispatch = () => {
        //LA STORE DESPACHA LA ACCIÓN
        store.dispatch(incremented)
        console.log('funciona', store.getState());
    }
    return (
        <div>
            <button onClick={dispatch}>+</button>
        </div>
    )
}

export default Counter
