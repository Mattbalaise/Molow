'use server'
import { signUpSchema } from '@/server/schemas/auth.schema';
import { signInWithGoogle, signUp, signIn } from '../../services/auth.service';
import { AuthState } from '@/server/types/auth.types'
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { handleSigninError, handleSignupError, validateSignupForm, validateSigninForm } from '@/server/actions/auth/validation.actions'

async function signUpWrapper(prevState: any, formData: FormData): Promise<AuthState> {
    try {
        const validationError = await validateSignupForm(formData);
        if (validationError?.errors) return validationError;
        return await signUp(formData.get('email') as string, formData.get('password') as string);
    } catch (error) {
        if (isRedirectError(error)) throw error;
        return handleSignupError(error);
    }
}

async function signInWrapper(prevState: any, formData: FormData): Promise<AuthState> {
    try {
        console.log('formadata', formData)
        const validationError = await validateSigninForm(formData);
        if (validationError?.errors) return validationError;
        return await signIn(
            formData.get('email') as string,
            formData.get('password') as string
        );
    }
    catch (error) {
        if (isRedirectError(error)) throw error;
        return handleSigninError(error);
    }
}

async function signInWithGoogleWrapper() {
    'use server';
    return signInWithGoogle();
}

async function signUpWithGoogleWrapper() {
    'use server';
    return signInWithGoogle();
}

export { signUpWrapper, signUpWithGoogleWrapper, signInWrapper, signInWithGoogleWrapper };