import Link from 'next/link';
import './page.css';

export default function AuthPage() {
  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-card">
          <Link href="/auth/signin" className="auth-button">
            Se connecter
          </Link>
          <Link href="/auth/signup" className="auth-button">
            S'inscrire
          </Link>
        </div>
      </div>
      <div className="auth-right" />
    </div>
  );
}