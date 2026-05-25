
'use client';
import Image from 'next/image';
import stars from '@/assets/stars.png';
import './header.css';

export default function HeaderAuth() {
    return (
        <div className="header-page">
            <Image className="header-stars" src={stars} width={75} height={75} alt="Stars" />
            <h1 className="header-title">MOLLOW</h1>
        </div>
    )
}