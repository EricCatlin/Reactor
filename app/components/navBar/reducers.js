
/* All reducers get two parameters passed in, state and action that occurred
*       > state isn't entire apps state, only the part of state that this reducer is responsible for
* */

// "state = null" is set so that we don't throw an error when app first boots up
const initialState = 
    {
        employee_count: 0,
        employee_purchase_cost_base : 5,
        employee_purchase_cost_modifier : 1,
        employee_upkeep_upkeep_base: 1,
        employee_upkeep_upkeep_modifier:1,

        employee_owned : 0
    }

export default function (state = initialState, action) {
    switch (action.type) {
        case 'HIRE_EMPLOYEE':
            state.employee_count = state.employee_count + action.payload;
            return state;
            break;
        case 'FIRE_EMPLOYEE':
        state.employee_count = state.employee_count - action.payload;
        return state;
        break;
        default:
            return state
    }
    return state;
}
