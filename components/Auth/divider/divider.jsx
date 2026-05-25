import './divider.css';
export default function Divider({ text }) {
    return (
        <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">ou</span>
            <div className="divider-line" />
        </div>
    );
}