import React from "react";
import { useState, useRef } from "react";

export default function Example() {
    const [valueInput, setValue] = useState('fdsaf')
    const inputRef = useRef()

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={() => {
                inputRef.current.value = valueInput
                console.log(inputRef);
                setValue(valueInput)
            }}>click me</button>
        </>
    )
}