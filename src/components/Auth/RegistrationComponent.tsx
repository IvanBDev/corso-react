import {ChangeEvent, FormEvent, useState} from "react";
import {Register} from "../../models/user.ts";
import UserService from "../../services/UserService.ts";
import {useNavigate} from "react-router-dom";
import ToastService from "../../services/ToastService.ts";

export function RegistrationComponent() {
    const [registration, setRegistration] = useState<Register>({firstName:``, lastName: ``, email:``, password:``})
    const navigateTo = useNavigate()

    const handleRegistrationFields = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = changeEvent.target

        setRegistration({...registration, [name]: value})
    }

    const handleSubmit = (submitEvent: FormEvent<HTMLFormElement>) => {
        submitEvent.preventDefault()

        UserService.register(registration).then(resp => {
            if (resp?.ok) {
                ToastService.dispatchSuccessToast("Registered successfully!")
                navigateTo(`/login`)
            }
        })
    }

    return (
        <div className="card bg-neutral text-neutral-content w-3/4">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Login</h2>
                <p>Enter your credentials</p>
                <form className="form-control gap-3" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        First Name:
                        <input type="text" className="grow" placeholder="Enter your name"
                               name="firstName" value={registration.firstName} onChange={handleRegistrationFields}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Last Name:
                        <input type="text" autoComplete="lastName" className="grow" name="lastName"
                               placeholder="Enter your Last Name" value={registration.lastName}
                               onChange={handleRegistrationFields}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email:
                        <input type="email" autoComplete="email" className="grow" placeholder="Enter your email"
                               name="email" value={registration.email} onChange={handleRegistrationFields}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Password:
                        <input type="password" autoComplete="current-password" className="grow" name="password"
                               placeholder="Enter your password" value={registration.password}
                               onChange={handleRegistrationFields}/>
                    </label>
                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}