import * as action from './actionType.jsx'

export const bugAdded=(description)=>{
    return{
        type:action.BUG_ADDED,
        payload:{
            description:description
        }
    }
}
export const bugRemoved=(id)=>{
    return{
        type:action.BUG_REMOVED,
        payload:{
            id:id
        }
    }
}
export const bugResolved=(id)=>{
    return{
        type:action.BUG_RESOLVED,
        payload:{
            id:id
        }
    }
}