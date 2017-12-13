import * as actions from './actions'
import reducer from './reducers'

describe('actions', () => {
  it('Test HIRE_EMPLOYEE', () => {
    const expectedAction = {
      type:"HIRE_EMPLOYEE",
      payload:1
    }
    expect(actions.hire(1)).toEqual(expectedAction);
    expect(actions.hire(1)).not.toEqual(null)
    
  });
 
})


describe('reducers', () => {
  it('Test HIRE_EMPLOYEE reducer', () => {
    const initialState = {
        employee_count: 0,
        employee_purchase_cost_base : 5,
        employee_purchase_cost_modifier : 1,
        employee_upkeep_upkeep_base: 1,
        employee_upkeep_upkeep_modifier:1,

        employee_owned : 0
    }
    expect(reducer(undefined, {})).toEqual(initialState);    


  });

  it('Test HIRE_EMPLOYEE action on reducer', () => {
    const alteredState = {
        employee_count: 1,
        employee_purchase_cost_base : 5,
        employee_purchase_cost_modifier : 1,
        employee_upkeep_upkeep_base: 1,
        employee_upkeep_upkeep_modifier:1,
        employee_owned : 0
    }
    const action  = actions.hire(1);
    expect(reducer(undefined, action)).toEqual(alteredState);    
    

  });
 
})
