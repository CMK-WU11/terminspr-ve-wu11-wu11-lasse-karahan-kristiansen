// Components
import PageHeading from "@/components/PageHeading";

//Styles
import './aktiviteter-style.scss'
import ActivityCard from "@/components/ActivityCard";


export default function AktiviteterPage(){
    return (
        <main className="activities-page-main">
            <PageHeading text="Aktiviteter" />
            <ActivityCard />
        </main>
    )
}