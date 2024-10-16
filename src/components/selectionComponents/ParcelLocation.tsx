import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import MapContainer, TileLayer, Marker, and Popup from react-leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface ParcelLocationProps {
  parcelLocation: {
    postcode: string;
    hallway: string;
    district: string;
    parcelNumber: string;
  };
  setParcelLocation: React.Dispatch<React.SetStateAction<{
    postcode: string;
    hallway: string;
    district: string;
    parcelNumber: string;
  }>>;
}

function ParcelLocation({ parcelLocation, setParcelLocation }: ParcelLocationProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      // Fix leaflet's default icon issue
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
        iconUrl: require('leaflet/dist/images/marker-icon.png').default,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParcelLocation({
      ...parcelLocation,
      [name]: value
    });

    if (name === 'postcode' && value.length > 2) {
      fetchSuggestions(value);
    }
  };

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
          countrycodes: 'de', // Adjust the country code as needed
          limit: 5
        }
      });

      const postcodes = response.data.map((item: any) => item.address.postcode).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
      setSuggestions(postcodes);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionClick = async (postcode: string) => {
    setParcelLocation({
      ...parcelLocation,
      postcode
    });
    setSuggestions([]);

    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: postcode,
          format: 'json',
          addressdetails: 1,
          countrycodes: 'de', // Adjust the country code as needed
          limit: 1
        }
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates([parseFloat(lat), parseFloat(lon)]);
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  return (
    <div className="duration-100 animate-appearance-in">
      <h2 className="text-2xl font-bold mb-4 text-center">Wo liegt das Flurstück?</h2>
      <p className="text-center mb-8">
        Sollten Sie mehrere Flurstücke haben, geben Sie hier bitte das Größte an.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 relative">
        <input
          type="text"
          name="postcode"
          placeholder="Postcode"
          value={parcelLocation.postcode}
          onChange={handleChange}
          className="border p-2 rounded-md mb-4"
        />
        {suggestions.length > 0 && (
          <ul className="border p-2 rounded-md mb-4 top-10 bg-white absolute">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <input
          type="text"
          name="hallway"
          placeholder="Flur"
          value={parcelLocation.hallway}
          onChange={handleChange}
          className="border p-2 rounded-md mb-4"
        />
        <input
          type="text"
          name="district"
          placeholder="Gemarkung oder Gemeinde"
          value={parcelLocation.district}
          onChange={handleChange}
          className="border p-2 rounded-md mb-4"
        />
        <input
          type="text"
          name="parcelNumber"
          placeholder="Flurstücksnummer"
          value={parcelLocation.parcelNumber}
          onChange={handleChange}
          className="border p-2 rounded-md mb-4"
        />
      </div>
      {coordinates && (
        <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={coordinates}>
            <Popup>
              Postcode: {parcelLocation.postcode}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default ParcelLocation;