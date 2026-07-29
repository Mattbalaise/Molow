import Link from "next/link";
import './navbar.css'
export default function Navbar() {
    return (
        <div className="navbar">
            <h1>My App</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link className="nav-link" href="/">Home</Link></li>
                    <li><Link className="nav-link" href="/about">About</Link></li>
                    <li><Link className="nav-link" href="/contact">Contact</Link></li>
                    <li><Link className="nav-link" href="/about">About</Link></li>
                    <li><Link className="nav-link" href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}