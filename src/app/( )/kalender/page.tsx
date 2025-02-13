import { getUserActivities } from "@/actions/user-actions"
import CalendarCard from "@/components/CalendarCard";
import { getSessionFromCookies } from "@/lib/cookies";

export default async function CalendarPage() {

    const userSession = getSessionFromCookies();

    const userActivities = await getUserActivities(
        (await userSession).userId,
        (await userSession).token
    );

    return (
        <main className="calendar-page-main">
            {
                userActivities.map(  (item) => {
                    return (
                        <CalendarCard activity={item} key={item?.id} />
                    )
                })
            }

        </main>
    )
}