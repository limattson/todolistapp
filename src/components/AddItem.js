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
        <form onSubmit={submitHandler} className='app-container'>
            <input type='text' value={inputValue} onChange={handleInput} />
            <button className='btn-custom btn-round btn-hover' type='submit'>Add
</button>
        </form>
    );
       
};

export default AddItem;