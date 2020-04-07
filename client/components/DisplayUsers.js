import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
        .then(res => {
            console.log('success');
            console.log(res);
        })
        .catch(err => {
            console.log('error');
            console.log(err);
        })
    }, [])

    return (
        <section>
            <p>Hello</p>
        </section>
    );
}