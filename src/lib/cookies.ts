import { cookies } from 'next/headers';


export async function setSessionCookies( session: LandrupDansApiSessionObject ): Promise<void> {
    'use server'
    
    try {
        const cookieStore = await cookies();
        cookieStore.set('session', JSON.stringify(session));

        return
    } catch ( error ) {
        console.error('Failed to set session cookies', error);
        return;
    }
}

export async function getSessionFromCookies() : Promise< LandrupDansApiSessionObject > {
    'use server'
    try {
        const cookieStore = await cookies();

        const session = JSON.parse(await cookieStore.get('session')?.value as string) as LandrupDansApiSessionObject
        


        return session
    } catch ( error ) {
        throw new Error(JSON.stringify( error ));
        
    }
}
