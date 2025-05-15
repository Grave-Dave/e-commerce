"use client";

import {useActionState} from "react";
import SubmitButton from "@/components/SubmitButton";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {signUp} from "@/lib/actions/auth";

const SignUpForm = () => {
    const [state, action] = useActionState(signUp, undefined);
    return (
        <form action={action} className="flex flex-col gap-2">
            {!!state?.message && (
                <p className="text-red-500 text-sm">{state.message}</p>
            )}
            <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    defaultValue={state?.data?.firstName}
                />
            </div>
            {!!state?.errors?.firstName && (
                <p className="text-red-500 text-sm">{state.errors.firstName}</p>
            )}

            <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    defaultValue={state?.data?.lastName}
                />
            </div>
            {!!state?.errors?.lastName && (
                <p className="text-red-500 text-sm">{state.errors.lastName}</p>
            )}

            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    defaultValue={state?.data?.email}
                />
            </div>
            {!!state?.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email}</p>
            )}

            <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                    id="phone"
                    name="phone"
                    placeholder="123456789"
                    defaultValue={state?.data?.phone}
                />
            </div>
            {!!state?.errors?.phone && (
                <p className="text-red-500 text-sm">{state.errors.phone}</p>
            )}

            <div>
                <Label htmlFor="address">Address</Label>
                <Input
                    id="address"
                    name="address"
                    placeholder="87-763 Jamaal Lock"
                    defaultValue={state?.data?.address}
                />
            </div>
            {!!state?.errors?.address && (
                <p className="text-red-500 text-sm">{state.errors.address}</p>
            )}

            <div>
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    defaultValue={state?.data?.password}
                />
            </div>

            {!!state?.errors?.password && (
                <div className="text-sm text-red-500">
                    <p>Password Must:</p>
                    <ul>
                        {state.errors.password.map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="py-2"></div>
            <SubmitButton>Sign Up</SubmitButton>
        </form>
    );
};

export default SignUpForm;