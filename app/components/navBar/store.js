import {combineReducers} from 'redux';
import _reducers from './reducers';
const reducers = combineReducers({
    state:_reducers
});
export default reducers
