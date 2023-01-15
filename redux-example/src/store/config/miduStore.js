import { createStore } from 'redux'
import { counterReducer } from '../reducers/miduReducer'

//CREAMOS EL STORE QUE RECIBE COMO PARMS EL REDUCER
export const createCounterStore = () => {
    let store = createStore(counterReducer);
    return store
}
