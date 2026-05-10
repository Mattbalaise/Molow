import Link from "next/link";

export default function AuthPage() {
    return (<div className="flex">
        <div className="w-1/2 h-screen flex items-center justify-center bg-[#F8F3E1]">
            <div className="flex flex-col gap-20 items-center">
                <Link href="/auth/signin" className="w-full text-2xl text-center font-bold text-[#F8F3E1] bg-[#0B5644] px-4 py-2 rounded-full">
                    Se connecter
                </Link>
                <Link href="/auth/signup" className="w-full text-2xl text-center font-bold text-[#F8F3E1] bg-[#0B5644] px-4 py-2 rounded-full">
                    S'inscrire
                </Link>
            </div>
        </div>
        <div className="w-1/2 h-screen flex items-center justify-center bg-[#0B5644] ">
        </div>
    </div>)
}