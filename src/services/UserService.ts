import {Login, Register} from "../models/user.ts";
import {z} from "zod";

class UserService {
    async login(loginForm: Login): Promise<Response | undefined> {
        const loginValidator = z.object({
            email: z.string().min(6).email(),
            password: z.string().min(12).max(18)
        }).required();

        const loginValid = await loginValidator.safeParseAsync(loginForm)
        if (!loginValid.success) {
            console.log("error")
            return
        }

        return await fetch(`http://localhost:3000/api/login`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginForm)
        })
    }

    async register(registrationForm: Register) {
        const registerValidator = z.object({
            firstName: z.string().min(2).max(20),
            lastName: z.string().min(2).max(20),
            email: z.string().min(6).email(),
            password: z.string().min(12).max(18).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,18}$/)
        }).required();

        const loginValid = await registerValidator.safeParseAsync(registrationForm)
        if (!loginValid.success) {
            console.log("error")
            return
        }

        return await fetch(`http://localhost:3000/api/register`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationForm)
        })
    }
}

export default new UserService()