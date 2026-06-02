'use client';
import './button.css';
import Image from 'next/image';

export default function Button({ 
    title, 
    image = "", 
    label = "", 
    style = {}, 
    formAction = undefined, 
    onClick = undefined 
}: { 
    title: string;
    image?: string;
    label?: string;
    style?: React.CSSProperties;
    formAction?: () => void | Promise<void>;
    onClick?: () => void | Promise<void>;
}) {
    return (
        <div>
            <label htmlFor="button">{label}</label>
            <button className="button" style={style} formAction={formAction} onClick={onClick}>
                {image ? <Image src={image} alt={title} width={20} height={20} className="button-image" /> : null}
                {title}
            </button>
        </div>
    );
}