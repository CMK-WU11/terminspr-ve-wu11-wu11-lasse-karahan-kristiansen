type LandrupDansApiSessionObject = {
    userId: string | number,
    token: string,
    role: "default" | "instructor",
    validUntil: number
}