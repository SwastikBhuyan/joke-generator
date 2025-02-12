import React from 'react';

const CheckboxGroup = ({ label, options, selected, onChange }) => {
    const handleChange = (option) => {
        const updatedSelection = selected.includes(option)
            ? selected.filter((item) => item !== option)
            : [...selected, option];

        onChange(updatedSelection);
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            <div className="checkbox-group">
                {options.map((option) => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            checked={selected.includes(option)}
                            onChange={() => handleChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CheckboxGroup;
