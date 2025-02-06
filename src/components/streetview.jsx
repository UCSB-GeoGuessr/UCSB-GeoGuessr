'use client';

import { useEffect } from 'react';

export default function StreetView({ lat = 37.86926, lng = -122.254811, heading = 165, pitch = 0, zoom = 1 }) {
  useEffect(() => {

    console.log("Google API Key:", process.env.NEXT_PUBLIC_key);

    // Define (or override) the callback function on window
    window.initializeStreetView = () => {
      if (window.google && window.google.maps) {
        new google.maps.StreetViewPanorama(
          document.getElementById("street-view"),
          {
            position: { lat, lng },
            pov: { heading, pitch },
            zoom,
          }
        );
      }
    };

  const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_key}&callback=initializeStreetView`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  // Cleanup on unmount:
  return () => {
    document.head.removeChild(script);
  };
} else {
  window.initializeStreetView();
}
  }, [lat, lng, heading, pitch, zoom]);

  return (
    <div
      id="street-view"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px', // Adjust as needed
      }}
    ></div>
  );
}