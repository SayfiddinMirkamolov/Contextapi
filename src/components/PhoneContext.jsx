import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/phones')
            .then(response => setPhones(response.data))
            .catch(error => console.error(error));
    }, []);

    const addPhone = (phone) => {
        axios.post('http://localhost:3000/phones', phone)
            .then(response => setPhones([...phones, response.data]))
            .catch(error => console.error(error));
    };

    const updatePhone = (updatedPhone) => {
        axios.put(`http://localhost:3000/phones/${updatedPhone.id}`, updatedPhone)
            .then(response => setPhones(phones.map(phone => phone.id === updatedPhone.id ? response.data : phone)))
            .catch(error => console.error(error));
    };

    const deletePhone = (id) => {
        axios.delete(`http://localhost:3000/phones/${id}`)
            .then(() => setPhones(phones.filter(phone => phone.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <PhoneContext.Provider value={{ phones, addPhone, updatePhone, deletePhone }}>
            {children}
        </PhoneContext.Provider>
    );
};

export { PhoneContext, PhoneProvider };
