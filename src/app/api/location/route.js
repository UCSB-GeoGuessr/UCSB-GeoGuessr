import {NextResponse} from "next/server";
import locations from "@/src/data/locations.json";

export async function GET() {
    const randomIndex = Math.floor(Math.random() * locations.length);
    const location = locations[randomIndex];
    return NextResponse.json(location);
}