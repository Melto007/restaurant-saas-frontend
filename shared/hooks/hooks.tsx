// import { useState, useCallback, useEffect, useReducer } from "react";
// import { C } from "@/shared/constants/constants";

// export function useForm(initial: any) {
//     const [values, setValues] = useState(initial);
//     const [saved,  setSaved]  = useState(initial);

//     const isDirty = JSON.stringify(values) !== JSON.stringify(saved);
//     const set     = useCallback(k => e => setValues(p => ({ ...p, [k]: e.target.value })), []);
//     const reset   = useCallback(() => setValues(saved),  [saved]);
//     const commit  = useCallback(() => setSaved(values),  [values]);

//     return { values, set, reset, commit, isDirty };
// }

// export function useAsync() {
//     const [state, setState] = useState({ loading: false, error: null });

//     const run = useCallback(async fn => {
//         setState({ loading: true, error: null });
//         try {
//         const result = await fn();
//         setState({ loading: false, error: null });
//         return result;
//         } catch (e) {
//         setState({ loading: false, error: e.message });
//         throw e;
//         }
//     }, []);

//     return { ...state, run };
// }

// export function usePasswordStrength(pw: string) {
//     const score = Math.min(4, Math.floor(pw.length / 3));
//     const meta  = [
//         null,
//         { label: "Weak",   col: C.orange    },
//         { label: "Fair",   col: C.amber     },
//         { label: "Good",   col: C.greenDark },
//         { label: "Strong", col: C.green     },
//     ][score];
//     return { score, meta };
// }
