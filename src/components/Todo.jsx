import React, { useContext } from 'react';
import { PhoneContext } from '../components/PhoneContext';

const Todo = () => {
    const { phones } = useContext(PhoneContext);

    return (
        <div>
            <h1>Todo</h1>
            <p>Currently, there are {phones.length} phone models.</p>
        </div>
    );
};

export default Todo;
