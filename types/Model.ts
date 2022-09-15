export interface User {
    userId?: string | null;
    fullName?: string | null;
    email?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
    agreedTerms?: boolean | null;
}
export type user = {
    user: User
} | null;