
/* All reducers get two parameters passed in, state and action that occurred
*       > state isn't entire apps state, only the part of state that this reducer is responsible for
* */

// "state = null" is set so that we don't throw an error when app first boots up
const initialState = 
    {
       
    }

export default function (state = initialState, action) {
    console.log("Redux")
    switch (action.type) {
        case 'DO_ACTION':
            alert(action.payload);
            return state;
            break;
        default:
            return state
    }
    return state;
}
