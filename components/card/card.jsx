'use client'
import './card.css'

export default function Card({ style = {} }) {
    return (
        <div className="card-3d" style={style.cardInner}>
            <div className="card-inner">
                <div className="card-front">
                    <div className="card-header">
                        <span className="card-number">7</span>
                        <span className="card-upper-text">entre potes</span>
                    </div>
                    <span className="card-text">Aujourd'hui t'es le King *</span>
                    <div className="card-header">
                        <span className="card-upper-text">entre potes</span>
                        <span className="card-number">7</span>
                    </div>
                </div>
                <div className="card-back" />
            </div>
        </div>
    )
}
