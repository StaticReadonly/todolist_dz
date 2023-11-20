import { useState } from "react"

//hook for input focusing
export const useInputFocus = (value = false) => {
    const [focused, setFocused] = useState(value);

    const inputFocus = () => {
        setFocused(true)
    };
    const inputBlur = () => {
        setFocused(false)
    };

    return [focused, inputFocus, inputBlur];
}