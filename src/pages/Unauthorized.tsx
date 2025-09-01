import React from 'react';
import { Link } from 'react-router';

const Unauthorized = () => {
    return (
        <div>
            <p>Opps !!!Unauthorized!!!!</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Unauthorized;