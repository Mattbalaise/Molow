'use server'
import { signUpSchema } from '@/server/schemas/auth.schema';
import { signInWithGoogle, signUp } from '../services/auth.service';
import { AuthState } from '@/server/types/auth.types'


function validateForm(formData: FormData): AuthState | null {
    const result = signUpSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    });
    if (!result.success) {
        return {
            errors: {
                email: result.error.issues.find(i => i.path.includes('email'))?.message,
                password: result.error.issues.find(i => i.path.includes('password'))?.message,
                general: result.error.issues[0]?.message
            }
        };
    }
    return null;
}

async function signUpWrapper(prevState: any, formData: FormData): Promise<AuthState> {
    try {
        const validationError = validateForm(formData);
        if (validationError) return validationError;
        return signUp(formData.get('email') as string, formData.get('password') as string);
    } catch (error) {
        console.error('Error during sign up:', error);
        throw error;
    }
}

async function signUpWithGoogleWrapper() {
    return signInWithGoogle();
}

export { signUpWrapper, signUpWithGoogleWrapper };