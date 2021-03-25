import {createStore , combineReducers} from 'redux'
import {categoryReducer} from './category'
import {productReducer} from './product'

let combinedReducers = combineReducers({categoryReducer,productReducer})

const store = createStore(combinedReducers)

export default store