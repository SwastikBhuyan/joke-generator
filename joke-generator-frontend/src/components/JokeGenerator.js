import React, { useState } from 'react';
import Form from './Form';

const JokeGenerator = () => {
    const [formData, setFormData] = useState({
        categories: [],
        language: '',
        blacklistFlags: [],
        responseFormat: 'json',
        jokeType: [],
        searchString: '',
        idRange: { min: '', max: '' },
        amount: 1
    });

    return (
        <div className="joke-generator">
            <h1>Joke Generator</h1>
            <Form formData={formData} setFormData={setFormData} />
        </div>
    );
};

export default JokeGenerator;
