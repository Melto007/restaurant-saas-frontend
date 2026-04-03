import { useReducer, useCallback } from "react";

export function useToast() {
    const [toasts, dispatch] = useReducer((state: any[], action: any) => {
        if (action.type === "ADD")    return [...state, action.toast];
        if (action.type === "REMOVE") return state.filter(t => t.id !== action.id);
        return state;
    }, []);

    const push = useCallback((message: String, type = "success") => {
        const id = Date.now() + Math.random();
        dispatch({ type: "ADD", toast: { id, message, type } });
        setTimeout(() => dispatch({ type: "REMOVE", id }), 3600);
    }, []);

    return { toasts, push };
}