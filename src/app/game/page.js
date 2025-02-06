"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Import the StreetView component dynamically (if needed)
const StreetView = dynamic(() => import("@/src/components/streetview"), { ssr: false });
const Map = dynamic(() => import("@/src/components/leaflet"), { ssr: false });

export default function GamePage() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("/api/location")
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((error) => console.error("Error fetching location:", error));
  }, []);

  if (!location) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Render the StreetView component instead of an iframe */}
      <div className="absolute top-0 left-0 w-full h-full">
        <StreetView
          lat={location.latitude || 37.86926}
          lng={location.longitude || -122.254811}
          heading={165}
          pitch={0}
          zoom={1}
        />
      </div>

      {/* Small, corner-aligned Leaflet map */}
      <div className="absolute bottom-4 right-4 w-[300px] h-[200px] z-[999] border-2 border-white shadow-lg bg-white">
        <Map />
      </div>
    </div>
  );
}