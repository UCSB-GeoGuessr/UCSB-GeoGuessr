"use client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: '/UCSBGaucho.png',
  iconSize: [21,36],
  iconAnchor: [15,45],
  popupAnchor: [0,-45],
});

function ClickableMarker() {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? (
    <Marker position={position} icon={customIcon}>
      <Popup>
        You clicked at {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
      </Popup>
    </Marker>
  ) : null;
}

export default function Leaflet() {
  return (
      <MapContainer
        center={[34.412, -119.848]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickableMarker />
    </MapContainer>
    );
}