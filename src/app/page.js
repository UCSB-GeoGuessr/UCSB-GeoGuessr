"use client";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/MapLeaflet"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>My Leaflet Map</h1>
      <Map />
    </div>
  )
}
