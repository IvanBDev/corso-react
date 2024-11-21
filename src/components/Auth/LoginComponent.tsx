import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {Login} from "../../models/user.ts";
import UserService from "../../services/UserService.ts";
import {Link, useNavigate} from "react-router-dom";
import ToastService from "../../services/ToastService.ts";
import {AuthContext} from "../../context/AuthContext.tsx";

export function LoginComponent() {
    const context = useContext(AuthContext)

    const [login, setLogin] = useState<Login>({email: ``, password: ``})
    const navigateTo = useNavigate()

    const handleEmailAndPasswordOnChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = changeEvent.target

        setLogin({...login, [name]: value})
    }

    async function handleSubmit(submitEvent: FormEvent<HTMLFormElement>) {
        submitEvent.preventDefault()

        const response = await UserService.login(login)
        if (response?.ok) {
            const json = await response.json() as { message: string, token: string }
            localStorage.setItem("jwt-token", json.token)
            context?.handleSetToken(json.token)
            navigateTo(`/dashboard`)
            ToastService.dispatchSuccessToast("logged successfully!!!")
        }
    }

    return (
        <div className="card bg-neutral text-neutral-content w-3/4">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Login</h2>
                <p>Enter your credentials</p>
                <form className="form-control gap-3" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        Email:
                        <input type="email" autoComplete="email" className="grow" placeholder="Enter your email"
                               name="email" value={login.email} onChange={handleEmailAndPasswordOnChange}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Password:
                        <input type="password" autoComplete="current-password" className="grow" name="password"
                               placeholder="Enter your password" value={login.password}
                               onChange={handleEmailAndPasswordOnChange}/>
                    </label>
                    <div className="flex justify-end items-center gap-4">
                        <Link to={`/register`} className="hover:underline hover:text-cyan-500">Not registered? click
                            here!</Link>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}