
type AuthState = {
  errors?: {
    username?: string;
    email?: string;
    password?: string;
    general?: string;
  };
};

export type {AuthState}