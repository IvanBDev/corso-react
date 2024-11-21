export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}

interface AddRole {
    role?: string;
}

export interface User extends AddRole {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IAuthContext {
    jwtToken: string
    handleSetToken: (jwtToken: string) => void
}