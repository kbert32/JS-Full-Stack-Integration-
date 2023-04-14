import { useState } from 'react';
import './NewGoal.css';

export default function NewGoal(props) {

    const [enteredText, setEnteredText] = useState('');

    function addGoalHandler(event) {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        props.onAddGoal(newGoal);

        setEnteredText('');
    };

    function changeHandler(event) {
        setEnteredText(event.target.value);
    };

    return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type='text' value={enteredText} onChange={changeHandler} />
            <button type='submit'>Add a Goal</button>
        </form>
    );
};