import {combineReducers} from 'redux';

import _reducers from './reducers';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const reducers = combineReducers({
    state:_reducers
});

export default reducers
