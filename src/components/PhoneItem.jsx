import React, { useState } from 'react';
import { useContext } from 'react';
import { PhoneContext } from '../components/PhoneContext';

const PhoneItem = ({ phone }) => {
    const { updatePhone, deletePhone } = useContext(PhoneContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedPhone, setEditedPhone] = useState(phone);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        updatePhone(editedPhone);
        setIsEditing(false);
    };

    const handleDelete = () => {
        deletePhone(phone.id);
    };

    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-body">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={editedPhone.name}
                                onChange={(e) => setEditedPhone({ ...editedPhone, name: e.target.value })}
                                className="form-control mb-2"
                            />
                            <input
                                type="text"
                                value={editedPhone.brand}
                                onChange={(e) => setEditedPhone({ ...editedPhone, brand: e.target.value })}
                                className="form-control mb-2"
                            />
                            <input
                                type="number"
                                value={editedPhone.price}
                                onChange={(e) => setEditedPhone({ ...editedPhone, price: parseInt(e.target.value) })}
                                className="form-control mb-2"
                            />
                            <button className="btn btn-success mr-2" onClick={handleSave}>Save</button>
                            <button className="btn btn-secondary" onClick={handleEdit}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <h5 className="card-title">{phone.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{phone.brand}</h6>
                            <p className="card-text">${phone.price}</p>
                            <button className="btn btn-primary mr-2" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhoneItem;
