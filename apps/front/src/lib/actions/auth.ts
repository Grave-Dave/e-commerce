"use server"

import {print} from "graphql"
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {SignUpFormState} from "@/lib/types/formState";
import {SignUpFormSchema} from "@/lib/zodSchemas/signUpFormSchema";
import {fetchGraphQL} from "@/lib/fetchGraphQL";
import {CREATE_USER_MUTATION, SIGN_IN_MUTATION} from "@/lib/gqlQueries";
import {SignInFormSchema} from "@/lib/zodSchemas/signInFormSchema";
import {createSession} from "@/lib/session";

export async function signUp(
    state: SignUpFormState,
    formData: FormData
): Promise<SignUpFormState> {
    const validatedFields = SignUpFormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if (!validatedFields.success)
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors
        }

    try {
        await fetchGraphQL(print(CREATE_USER_MUTATION), {
            input: {...validatedFields.data},
        });

    } catch (error) {
        console.log(`SignIn error: ${error}`)
        return {
            data: Object.fromEntries(formData.entries()),
            message: error?.toString() ?? "Something went wrong",
        };
    }

    redirect("/auth/signin")
}

export async function signIn(
    state: SignUpFormState,
    formData: FormData
): Promise<SignUpFormState> {

    const validatedFields = SignInFormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if (!validatedFields.success)
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors
        }

    try {
        const data = await fetchGraphQL(print(SIGN_IN_MUTATION), {
            input: {...validatedFields.data},
        });

        await createSession(
            {
                user: {
                    id: data.signIn.id,
                    firstName: data.signIn.firstName,
                    lastName: data.signIn.lastName,
                    email: data.signIn.email,
                },
                accessToken: data.signIn.accessToken
            }
        )
    } catch (error) {
        console.log(`SignIn error: ${error}`)
        return {
            data: Object.fromEntries(formData.entries()),
            message: "Invalid credentials",
        };
    }

    revalidatePath("/")
    redirect("/")
}
