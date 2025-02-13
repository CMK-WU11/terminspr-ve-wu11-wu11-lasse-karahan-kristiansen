import Image from "next/image"

import SplashImage from '@/assets/splash-image.jpg'


export default function NotFoundPage(){
    return(
        <>
            <h2>Page Not found</h2>
            <Image
                alt={'Frontpage splash image'}
                src={SplashImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                objectFit: 'cover',
                zIndex: -2
            }}
            />

        </>
    )
}