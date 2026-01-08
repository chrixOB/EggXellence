import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setError("Location access denied");
      }
    );
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;
  if (error) return <p>{error}</p>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={userLocation || { lat: 5.6037, lng: -0.1870 }}
      zoom={14}
    >
      {userLocation && <Marker position={userLocation} />}
    </GoogleMap>
  );
}
