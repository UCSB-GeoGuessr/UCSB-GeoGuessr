"use client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

// A helper component that listens for map click events and drops a marker
const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  // Register map click events using useMapEvents
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>
        You clicked at <br />
        {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
      </Popup>
    </Marker>
  ) : null;
};

const MapComponent = () => {
  return (
    <MapContainer
      center={[34.412, -119.848]}
      zoom={14} 
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* This component handles the click event and drops a marker */}
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;