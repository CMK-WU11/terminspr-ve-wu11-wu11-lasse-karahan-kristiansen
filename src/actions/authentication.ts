'use server'

import { setSessionCookies } from "@/lib/cookies"

const authEndpoint = 'http://localhost:4000/auth/token'

export async function loginUser( username : string, password : string ) {
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

        if (!response.ok){
            throw new Error( response?.statusText )
        }

        const data = await response.json()

        setSessionCookies( data );

    } catch ( error ) {
        throw new Error ( `Something went wrong with the login: \n ${error}` )
    }
}

