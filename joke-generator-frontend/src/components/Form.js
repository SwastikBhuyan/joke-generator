import React from 'react';
import SelectField from './SelectField';
import CheckboxGroup from './CheckboxGroup';
import InputField from './InputField';

const categories = ['Any', 'Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
const flags = ['nsfw', 'religious', 'political', 'racist', 'sexist'];
const jokeTypes = ['single', 'twopart'];

const Form = ({ formData, setFormData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const handleReset = () => {
        setFormData({
            categories: [],
            language: '',
            blacklistFlags: [],
            responseFormat: 'json',
            jokeType: [],
            searchString: '',
            idRange: { min: '', max: '' },
            amount: 1
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <SelectField
                label="Select category/categories:"
                options={categories}
                multiple={true}
                value={formData.categories}
                onChange={(value) => setFormData({ ...formData, categories: value })}
            />

            <SelectField
                label="Select language:"
                options={['Any', 'English', 'Spanish', 'French']}
                value={formData.language}
                onChange={(value) => setFormData({ ...formData, language: value })}
            />

            <CheckboxGroup
                label="Select flags to blacklist:"
                options={flags}
                selected={formData.blacklistFlags}
                onChange={(selectedFlags) => setFormData({ ...formData, blacklistFlags: selectedFlags })}
            />

            <CheckboxGroup
                label="Select joke type:"
                options={jokeTypes}
                selected={formData.jokeType}
                onChange={(selectedTypes) => setFormData({ ...formData, jokeType: selectedTypes })}
            />

            <InputField
                label="Search for a joke:"
                type="text"
                value={formData.searchString}
                onChange={(value) => setFormData({ ...formData, searchString: value })}
            />

            <div className="form-buttons">
                <button type="button" onClick={handleReset}>Reset Form</button>
                <button type="submit">Send Request</button>
            </div>
        </form>
    );
};

export default Form;
