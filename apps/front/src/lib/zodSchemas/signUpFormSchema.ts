import {z} from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const SignUpFormSchema = z.object({
    firstName: z.string().min(2).trim(),
    lastName: z.string().min(2).trim(),
    email: z.string().email(),
    phone:z.string().regex(phoneRegex, {message: 'Invalid phone number.'}),
    address:z
        .string()
        .min(5)
        .max(100)
        .regex(
            /^[A-Za-z0-9\s.,\-\/#]+$/,
            "Address contains invalid characters"
        ),
    password: z
        .string()
        .min(8)
        .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
        .regex(/[0-9]/, {
            message: "Contain at least one number.",
        })
        .regex(/[^a-zA-Z0-9]/, {
            message: "Contain at least one special character.",
        })
        .trim(),
});
