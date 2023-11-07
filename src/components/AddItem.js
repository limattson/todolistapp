import { useState } from 'react';

const AddItem = ({dispatch}) => {
    const [inputValue, updateInput] = useState ('');
    const handleInput = (event) => {
       updateInput(event.target.value);
    
    };
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: inputValue });
        updateInput('');
    };
    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={inputValue} onChange={handleInput} />
            <button type='submit'>Add</button>
        </form>
    );
       
};

export default AddItem;