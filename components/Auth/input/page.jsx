'use client';
import './page.css';

/**
 * @typedef {Object} InputProps
 * @property {string} label
 * @property {string} type
 * @property {string} name
 * @property {string} id
 * @property {string} [value]
 * @property {string} [placeholder]
 * @property {import('react').ChangeEventHandler<HTMLInputElement>} [onChange]
 * @property {boolean} [required]
 */

/**
 * @param {InputProps} props
 */
export default function Input({ label, type, name, value, onChange, required, id, placeholder }) {
    const inputProps = {
        id,
        type,
        name,
        placeholder: placeholder || '',
        className: 'input',
        required,
    };

    if (value !== undefined) {
        inputProps.value = value;
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