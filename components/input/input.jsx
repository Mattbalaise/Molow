'use client';
import './input.css';

/**
 * @typedef {Object} InputProps
 * @property {string} label
 * @property {string} type
 * @property {string} name
 * @property {string} id
 * @property {string} [defaultValue]
 * @property {string} [placeholder]
 * @property {import('react').ChangeEventHandler<HTMLInputElement>} [onChange]
 * @property {boolean} [required]
 */

/**
 * @param {InputProps} props
 */
export default function Input({ label, type = "text", name, defaultValue, onChange, required, id, placeholder }) {
    const inputProps = {
        id,
        type,
        name,
        placeholder: placeholder || '',
        className: 'input',
        required,
    };

    if (defaultValue !== undefined) {
        inputProps.defaultValue = defaultValue;
    }
    if (onChange) {
        inputProps.onChange = onChange;
    }

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input {...inputProps} />
        </div>
    );
}