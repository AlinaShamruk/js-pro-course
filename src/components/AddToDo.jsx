import React from 'react';
import { useState } from 'react';

export const AddToDo = ({ addItem }) => {
    const [item, setItem] = useState('');

    return (
        <>
            <input value={item} onChange={(e) => setItem(e.target.value)}></input>
            <button onClick={() => addItem(item)}>Add</button>
        </>
    )
}