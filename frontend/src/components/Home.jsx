import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import image from '/src/img/factory.webp';

import {
    KnockProvider,
    KnockFeedProvider,
    NotificationIconButton,
    NotificationFeedPopover,
} from "@knocklabs/react";

import "@knocklabs/react/dist/index.css";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

function Home() {
    const mapRef = useRef(null);
    const userMarkerRef = useRef(null);
    const userPositionRef = useRef(null);
    const [step, setStep] = useState(0.001); // Change this value to adjust the step size

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current);

            navigator.geolocation.getCurrentPosition(function (position) {
                const { latitude, longitude } = position.coords;
                userPositionRef.current = { lat: latitude, lng: longitude };
                //userMarkerRef.current = L.marker(userPositionRef.current, { icon: L.icon({ iconUrl: image }) }).addTo(mapRef.current);
                userMarkerRef.current = L.marker(userPositionRef.current).addTo(mapRef.current);
            }, function (error) {
                toast.error(`Error: ${error.message}`);
            });
            //set a default user position for elko NV
            userPositionRef.current = { lat: 40.8324, lng: -115.7631 };
        }
    }, []);

    const move = (direction) => {
        switch (direction) {
            case 'up':
                userPositionRef.current.lat += step;
                userMarkerRef.current = L.marker(userPositionRef.current).addTo(mapRef.current);

                break;
            case 'down':
                userPositionRef.current.lat -= step;
                userMarkerRef.current = L.marker(userPositionRef.current).addTo(mapRef.current);
                break;
            case 'left':
                userPositionRef.current.lng -= step;
                userMarkerRef.current = L.marker(userPositionRef.current).addTo(mapRef.current);
                break;
            case 'right':
                userPositionRef.current.lng += step;
                userMarkerRef.current = L.marker(userPositionRef.current).addTo(mapRef.current);
                break;
            default:
                break;
        }
        userMarkerRef.current.setLatLng(userPositionRef.current);
        mapRef.current.panTo(userPositionRef.current);
    }

    return (
        <div>
            <div id="map" style={{ height: '100vh', width: '100vw' }} />
            <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <button onClick={() => move('up')}>Up</button>
                <button onClick={() => move('down')}>Down</button>
                <button onClick={() => move('left')}>Left</button>
                <button onClick={() => move('right')}>Right</button>
            </div>
        </div>
    );
}
export default Home;