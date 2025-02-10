import Image from "next/image";
import Link from "next/link";

// Styles
import './activity-card.scss'

//TODO - Remove static data and implement dynamic data
export default function ActivityCard(){
    return (
        <Link
            href={'/'}
            className="activity-card"
        >
            <div className="activity-card__content">
                <p>Junior Fitness Dance</p>
                <p>10-12 år</p>
            </div>

            <Image
            className="activity-card__image"
                alt="Mountains"
                src={'http://localhost:4000/file-bucket/1632381947468tango.jpg'}
                // placeholder="blur"
                quality={100}
                sizes='100vw'
                fill={true}
                />
        </Link>
    )
}