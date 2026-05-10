import { signIn, signUp, signInWithGoogle } from '@/server/services/auth.service'
import Link from 'next/link';
export default async function SignUpPage({
    searchParams,
}: {
    searchParams: Promise<{ redirectTo?: string }>
}) {
    const { redirectTo = '/dashboard' } = await searchParams;
    async function signUpWrapper(formData: FormData) {
        'use server'
        return signUp(
            formData.get('email') as string,
            formData.get('password') as string
        )
    }
    async function signUpWithGoogleWrapper() {
        'use server'
        return signInWithGoogle()
    }
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-[#F8F3E1] flex items-center justify-center p-8">
                <div className="w-full max-w-sm flex flex-col gap-6">

                    <div>
                        <p className="text-xs font-medium text-[#0B5644] tracking-widest uppercase mb-2">Bienvenue</p>
                        <h1 className="text-3xl font-medium text-[#0B5644]">Créer un compte</h1>
                    </div>
                    <form>
                        <div className="flex flex-col gap-3">
                            <input name="email" type="email" placeholder="Email" required
                                className="w-full px-4 py-3 border border-[#0B564440] rounded-xl bg-white text-[#0B5644] outline-none" />
                            <input name="password" type="password" placeholder="Mot de passe" required
                                className="w-full px-4 py-3 border border-[#0B564440] rounded-xl bg-white text-[#0B5644] outline-none" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <button formAction={signUpWrapper}
                                className="w-full py-3 bg-[#0B5644] text-[#F8F3E1] rounded-full font-medium">
                                S'inscrire
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-[#0B564425]" />
                                <span className="text-sm text-[#0B564480]">ou</span>
                                <div className="flex-1 h-px bg-[#0B564425]" />
                            </div>

                            <button formNoValidate formAction={signUpWithGoogleWrapper}
                                className="w-full py-3 bg-white border border-[#0B564430] rounded-full font-medium text-[#0B5644] flex items-center justify-center gap-2">
                                S'inscrire avec Google
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-sm text-[#0B564480]">
                        Déjà un compte ?{' '}
                        <Link href="/auth/signin" className="text-[#0B5644] font-medium">Se connecter</Link>
                    </p>
                </div>
            </div>
            <div className="w-1/2 bg-[#0B5644]" />
        </div>
    )
}