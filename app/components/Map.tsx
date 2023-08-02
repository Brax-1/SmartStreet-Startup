'use client';
/* eslint-disable */
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useCallback, useMemo, useRef, useState } from 'react';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[]
  setLocation?: any
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Smart STreet</a> contributors';
function check(value:any) {
  console.log(value,"check value")
  return 1
}
const Map: React.FC<MapProps> = ({ center, setLocation }) => {
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker : any = markerRef.current
        if (marker != null && setLocation) {
          setLocation(JSON.stringify(marker?.getLatLng())) 
        }
      },
    }),
    [],
  )

  return (
      <MapContainer 
        center={center as L.LatLngExpression || [27.6094, 75.1398]} 
        zoom={center ? 13 : 5} 
        scrollWheelZoom={true} 
        className="h-[50vh] rounded-lg"
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
          <Marker
          draggable={setLocation ? true : false}
          eventHandlers={eventHandlers}
          position={center as L.LatLngExpression  || [27.6094, 75.1398]}
          ref={markerRef}
          >
          
        </Marker>
      </MapContainer>
  )
}

export default Map
