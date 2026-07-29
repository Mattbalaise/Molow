import Navbar from "@/components/navbar/navbar";
import './layout.css'
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="main-layout">
            <Navbar />
            {children}
        </div>
    );
}