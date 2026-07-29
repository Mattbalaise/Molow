'use server'
import { signUpSchema, signinSchema } from '@/server/schemas/auth.schema';
import { AuthState } from '@/server/types/auth.types'

const CREDENTIAL_ERRORS = ['Invalid login credentials', 'User not found'];
const USER_EXIST = 'user already registered';

async function validateSigninForm(formData: FormData, details: boolean = true): Promise<AuthState> {
    const result = signinSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    });
    if (!result.success) {
        return {
            errors: {
                email: details ? result.error.issues.filter(i => i.path.includes('email'))?.map(i => i.message) : undefined,
                password: details ? result.error.issues.filter(i => i.path.includes('password'))?.map(i => i.message) : undefined,
                general: undefined
            }
        };
    }
    return {};
}


async function validateSignupForm(formData: FormData, details: boolean = true): Promise<AuthState> {
    const result = signUpSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    });
    if (!result.success) {
        return {
            errors: {
                email: details ? result.error.issues.filter(i => i.path.includes('email'))?.map(i => i.message) : undefined,
                password: details ? result.error.issues.filter(i => i.path.includes('password'))?.map(i => i.message) : undefined,
                general: undefined
            }
        };
    }
    return {};
}

async function handleSignupError(error: unknown): Promise<AuthState> {
    if (error instanceof Error) {
        const alreadyExists = error.message.toLowerCase().includes(USER_EXIST);
        return {
            errors: {
                general: [alreadyExists ? 'Ce compte existe déjà' : 'Une erreur est survenue']
            }
        };
    }
    return {
        errors: {
            general: ['Une erreur est survenue']
        }
    };
}

async function handleSigninError(error: unknown): Promise<AuthState> {
    if (error instanceof Error) {
        const isCredentialError = CREDENTIAL_ERRORS.some(msg => error.message.includes(msg));
        return {
            errors: {
                general: isCredentialError ? [error.message] : []
            }
        };
    }
    else {
        return {
            errors: {
                general: ['Une erreur est survenue']
            }
        }
    }
}


export { handleSigninError, handleSignupError, validateSignupForm, validateSigninForm }