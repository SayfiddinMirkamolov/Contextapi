import React, { useContext } from 'react';
import { PhoneContext } from '../components/PhoneContext';
import PhoneItem from './PhoneItem';
import NewPhone from './NewPhone';

const Home = () => {
    const { phones } = useContext(PhoneContext);

    return (
        <div>
            <h1>Phone Models</h1>
            <div className="row">
                {phones.map(phone => (
                    <PhoneItem key={phone.id} phone={phone} />
                ))}
            </div>
            <NewPhone />
        </div>
    );
};

export default Home;
