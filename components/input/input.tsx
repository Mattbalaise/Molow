'use client';
import './input.css';
import React, { ChangeEventHandler } from 'react';
import { ErrorWithTooltip } from '@/components/ErrorWithTooltip/ErrorWithTooltip'

export default function Input(
    { label, type = "text", name, defaultValue, onChange, required, id, placeholder, msgError }: {
        label: string,
        type?: string,
        name: string,
        defaultValue?: string,
        onChange?: ChangeEventHandler<HTMLInputElement>,
        required?: boolean,
        id: string,
        placeholder?: string,
        msgError?: string[]
    }) {
    const inputProps: React.InputHTMLAttributes<HTMLInputElement> & { className: string } = {
        id,
        type,
        name,
        placeholder: placeholder || '',
        className: 'input',
        required,
        ...(defaultValue !== undefined && { defaultValue }),
        ...(onChange && { onChange }),
    };

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input {...inputProps} />
            <ErrorWithTooltip messages={msgError} />
        </div>
    );
}