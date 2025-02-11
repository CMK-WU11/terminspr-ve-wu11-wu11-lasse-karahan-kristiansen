import Image from "next/image";
// Components
import { getActivity } from "@/actions/activities-api";
import PageHeading from "@/components/PageHeading";


// Styles
import './aktivitet-style.scss';

export default async function AktiviteterPage({
    params
} : {
    params: Promise<{ activityId : string }>
}){

    const activityId = ( await params )?.activityId as string;

    try{
        const activity = await getActivity( activityId );
        

        return (
            <main className="activity-page-main">
                <Image
                    alt="Mountains"
                    src={`${ activity?.asset?.url }`}
                    // placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: -2
                    }}
                />
                <p>{ activity?.name }</p>
            </main>
        )
    } catch ( error ) {
        return (
            <main>
                <PageHeading text={error?.message} />
            </main>
        )
    }
    
}