'use client';
import './page.css';
import Image from 'next/image';
export default function Button({ label, onClick, title, image }) {
    return (
        <div>
            <label htmlFor="button">{label}</label>
            <button className="button" onClick={onClick} image={image}>
                <Image src={image} alt={title} width={20} height={20} className="button-image" />
                {title}
            </button>
        </div>
    );
}