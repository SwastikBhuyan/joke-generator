import React from 'react';

const SelectField = ({ label, options, multiple, value, onChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select
                multiple={multiple}
                value={value}
                onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    onChange(multiple ? selected : selected[0]);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
