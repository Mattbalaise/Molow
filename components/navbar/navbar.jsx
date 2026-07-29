import Link from "next/link";
import './navbar.css'
export default function Navbar() {
    return (
        <div className="container">
            <div className="logo-container">
                <div className="logo">
                    <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 194.807 80.071">
                        <path id="path-trace-first-letter" className="path-trace"
                            d="M4,65.505c2.011-4.294,4.015-9.082,5.867-14.347,2.332-6.629,4.013-12.845,5.236-18.456,3.847,9.766,7.694,19.532,11.541,29.298,3.877-10.063,7.754-20.126,11.631-30.19.031,4.514.682,12.172,4.575,20.595,2.79,6.037,6.296,10.414,8.986,13.261"
                            fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20" />
                        <path id="path-trace-word" className="path-trace"
                            d="M38.721,31.121c.614-.812,3.709-4.749,8.001-4.536,1.008.05,1.871.313,2.616.654,4.44,2.029,7.239,8.414,8.372,10.596,7.141,13.744,26.141,17.547,39.376,11.511,8.72-3.977,15.493-11.536,20.027-19.84.947-1.734,9.856-17.716,4.251-23.612-.199-.21-1.726-1.769-3.976-1.888-6.881-.362-13.95,13.096-16.247,23.625-3.366,15.435.963,36.487,10.112,37.661,8.522,1.093,15.168-7.806,19.722-13.699,7.62-9.861,12.027-17.316,14.774-23.962,2.631-6.364,5.915-14.549,2.503-18.067-1.4-1.443-3.392-1.549-3.549-1.555-8.637-.336-16.947,22.331-18.707,36.89-.936,7.745-3.245,20.15,7.709,21.601,9.419,1.248,19.75-6.177,26.659-11.756,5.34-4.312,13.357-12.892,19.528-26.589"
                            fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20" />
                        <circle id="circle-trace-first" className="circle-trace" cx="74.696" cy="50.02" r="15.429" fill="none"
                            stroke="#000" strokeMiterlimit="10" strokeWidth="9" />
                        <circle id="circle-trace-second" className="circle-trace" cx="164.021" cy="50.02" r="15.429" fill="none"
                            stroke="#000" strokeMiterlimit="10" strokeWidth="9" />
                    </svg>
                </div>
            </div>
            <div className="navbar-container">
                <div className="navbar">
                    <navbar className="bar fx-draw navbar">
                        <a href="#">Home<svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                            <path pathLength="100" d="M1,7 C22,2 44,11 68,6 C80,3.5 92,4 99,6" />
                        </svg></a>
                        <a href="#">About<svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                            <path pathLength="100" d="M1,7 C22,2 44,11 68,6 C80,3.5 92,4 99,6" />
                        </svg></a>
                        <a href="#">Services<svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                            <path pathLength="100" d="M1,7 C22,2 44,11 68,6 C80,3.5 92,4 99,6" />
                        </svg></a>
                        <a href="#">Contact<svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                            <path pathLength="100" d="M1,7 C22,2 44,11 68,6 C80,3.5 92,4 99,6" />
                        </svg></a>
                        <a href="#">Blog<svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                            <path pathLength="100" d="M1,7 C22,2 44,11 68,6 C80,3.5 92,4 99,6" />
                        </svg></a>
                    </navbar>
                </div>
            </div>
            <div className="arc arc-right">
                <svg viewBox="-35 0 150 820" aria-hidden="true">
                    <path d="M25.1902 813.843C-31.3114 492.843 43.1888 62.8431 96.689 3.34311" fill="none" stroke="#FF5600"
                        strokeWidth="7" />
                </svg>
            </div>
            <div className="arc arc-left">
                <svg width="136" height="308" viewBox="0 0 136 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.0542 4.55856C83.0542 41.0586 116.205 140.478 130.554 307.059" fill="none" stroke="#FF5600"
                        strokeWidth="7" />
                </svg>
            </div>
        </div >
    )
}