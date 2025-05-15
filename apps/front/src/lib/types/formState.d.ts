export type SignUpFormState = {
    data: {
        firstName?: string,
        lastName?: string,
        email?: string,
        phone?: string,
        address?: string,
        password?: string,
    }
    errors?: {
        firstName?: string[],
        lastName?: string[],
        email?: string[],
        phone?: string[],
        address?: string[],
        password?: string[]
    }
    message?: string
} | undefined
