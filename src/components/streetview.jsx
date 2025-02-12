'use client';

import { useEffect } from 'react';

export default function StreetView({ lat, lng, heading, pitch, zoom}) {
  useEffect(() => {
    window.initializeStreetView = () => {
      if (window.google && window.google.maps) {
        new google.maps.StreetViewPanorama(
          document.getElementById("street-view"),
          {
            position: { lat, lng },
            pov: { heading, pitch },
            zoom,
            disableDefaultUI: true,
            showRoadLabels: false,
          }
        );
      }
    };

  const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_KEY}&callback=initializeStreetView`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    return () => {document.head.removeChild(script);
    };
  } 
  else {
  window.initializeStreetView();
}
  }, [lat, lng, heading, pitch, zoom]);
  
  return <div id="street-view" className="w-full h-full"></div>;
}