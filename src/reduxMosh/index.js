import { bugStore } from "./store";
import { bugAdded } from "./actions";


// in order to change the state of the store we dispatch our action.


// this function is like useEffect , it gets called everytime the state of the store gets changed
// it is used to refresh the UI
// It is importatnt to unsubscribe to the subscibe if user navigate to the other page , where it does't have the UI component to prevent memory leaks 
bugStore.subscribe(()=>{
    console.log("Store Changed",bugStore.getState());
})

// when we dispatch an action the store makes a call to reducer by passing the current state and action as parameter .

bugStore.dispatch(bugAdded("Bug1"))

// bugStore.dispatch({})

console.log(bugStore.getState())


