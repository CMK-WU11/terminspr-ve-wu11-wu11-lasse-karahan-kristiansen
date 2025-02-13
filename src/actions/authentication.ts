'use server';

import { z } from "zod"
import { cookies } from "next/headers";

const authEndpoint = 'http://localhost:4000/auth/token'

export async function loginFormAction( prevState, formData : FormData ) {
    const username = formData.get("username")
    const password = formData.get("password")


    // Validate form fields
    const schema = z.object({
        username: z.string().min(1, {message: "Du skal udfylde et brugernavn"}), //min 1 tegn langt, laver vi ikke egen costume beskeder, så bruger zod standard engelske beskeder
        password: z.string().min(1, {message: "Du skal udfylde et adgangskode"})
    })

    const validate = schema.safeParse({
        username,
        password
    })

    if(!validate.success){ // returns an error if the form validation wasn't succesful
        return{
            formData: {
                username,
                password
            },
            errors: validate.error.format()
        }
    }

    // Attempt login
    try {
        loginUser( username as string, password as string)
    } catch ( error ) {
        throw new Error ( `Something went wrong with the login: \n ${error}` )
    }
}

export async function loginUser( username: string, password:string ) {
    try {
        const response = await fetch( 
            authEndpoint, 
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "username": username,
                    "password": password
                })
            }
        )

        if ( response.status === 401 ){
            throw new Error (`Incorrect username or password\n ${response?.statusText} \n Error code: ${ response?.status }`)
        }

        if (!response.ok){
            throw new Error( response?.statusText )
        }

        const data : LandrupDansApiSessionObject = await response.json()

        const cookieStore = await cookies();
        cookieStore.set('session', JSON.stringify(data), { maxAge: data.validUntil})

    } catch ( error ) {
        throw new Error ( `Something went wrong with the login: \n ${error}` )
    }
}