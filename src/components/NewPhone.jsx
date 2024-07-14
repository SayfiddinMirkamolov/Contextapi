import React, { useState, useContext } from 'react';
import { PhoneContext } from '../components/PhoneContext';

const NewPhone = () => {
    const { addPhone } = useContext(PhoneContext);
    const [newPhone, setNewPhone] = useState({ name: '', brand: '', price: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPhone.name && newPhone.brand && newPhone.price) {
            addPhone({ ...newPhone, price: parseInt(newPhone.price) });
            setNewPhone({ name: '', brand: '', price: '' });
        }
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">Add New Phone</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newPhone.name}
                            onChange={(e) => setNewPhone({ ...newPhone, name: e.target.value })}
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Brand"
                            value={newPhone.brand}
                            onChange={(e) => setNewPhone({ ...newPhone, brand: e.target.value })}
                            className="form-control mb-2"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newPhone.price}
                            onChange={(e) => setNewPhone({ ...newPhone, price: e.target.value })}
                            className="form-control mb-2"
                        />
                        <button type="submit" className="btn btn-primary">Add Phone</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPhone;
