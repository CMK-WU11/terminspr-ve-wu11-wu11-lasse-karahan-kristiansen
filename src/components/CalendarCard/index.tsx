export default async function CalendarCard({
    activity
} : {
    activity : LandrupDansApiActivityObject
}) {
    return (
        <button onClick={
            () => {

            }
        }>
            <h3>{ activity?.name }</h3>
        </button>
    )
}