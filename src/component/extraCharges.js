import React, { useState } from 'react';

const ExtraCharges = ({ onChange }) => {
    const [charges, setCharges] = useState({ charge1: 0, charge2: 0 });

    const handleChange = (e) => {
        setCharges({ ...charges, [e.target.name]: e.target.value });
        onChange({ ...charges, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3>Extra Charges</h3>
            <input name="charge1" type="number" onChange={handleChange} placeholder="Charge 1" />
            <input name="charge2" type="number" onChange={handleChange} placeholder="Charge 2" />
        </div>
    );
};

export default ExtraCharges;
