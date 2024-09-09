
// reducer is a function which takes two parameter state and action

let lastId=0;

// we set the initial state to [] so that it converts the undefined into an empty array , if state does not have even a single value.
function bugReducer(state=[], action){
    if(action.type=== action.BUG_ADDED){
        // returning an array which contains the all data of the current state and a new object given by user
        return[
            ...state,
            {
                id:++lastId,
                description:action.payload.description,
                resolved:false,
            }
        ]
    }
    else if (action.type ===  action.BUG_REMOVED){
        return state.filter(bug=>bug.id!=action.payload.id)
    }
    else if(action.type===action.BUG_RESOLVED){
        return state.map(bug=>bug.id!==action.payload.id ? bug:{...bug,resolved:true})
    }
    return state

}

export {bugReducer}