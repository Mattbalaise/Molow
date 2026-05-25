'use client';
import './button.css';
import Image from 'next/image';
export default function Button({ onClick, title, image = "", label = "" }) {
    return (
        <div>
            <label htmlFor="button">{label}</label>
            <button className="button" onClick={onClick} image={image}>
                {image ? <Image src={image} alt={title} width={20} height={20} className="button-image" /> : null}
                {title}
            </button>
        </div>
    );
}