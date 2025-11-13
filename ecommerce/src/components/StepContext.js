import { createContext, useReducer } from "react";

export const StepContext = createContext(null);
export const StepDispatchContext = createContext(null);

function stepReducer(step,action){
    if(action.type === 'forward')
        return (step < 3) ? (step + 1) : step;
    else if(action.type === 'back')
        return (step > 1) ? (step - 1) : step;
    else if(action.type === 'modify')
        return (1 <= action.value && action.value <= 3) ? action.value : step;
    else
        return step;
}

export function StepProvider({children}){
    const [step,dispatch] = useReducer(stepReducer,1);
    return (
        <StepContext.Provider value={step}>
            <StepDispatchContext.Provider value={dispatch}>
                {children}
            </StepDispatchContext.Provider>
        </StepContext.Provider>
    )
}