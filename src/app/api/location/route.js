import {NextResponse} from "next/server";
import locations from "@/src/data/locations.json";

export async function GET() {
    const randomIndex = Math.floor(Math.random() * locations.length);
    const location = locations[randomIndex];

    const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${location.laitude},${location.longirtude}&fov=90&heading=235&pitch=10&key=${process.env.NEXT_PUBLIC_key}`;

    return NextResponse.json({ ...location, streetViewUrl });

}