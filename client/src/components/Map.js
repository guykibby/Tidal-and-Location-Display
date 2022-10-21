import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCecPt-U0pcXsQ47red7hiKTDU1LQ1auvE",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const containerStyle = {
  width: "100%",
  height: "500px",
  "max-height": "30vw",
};

function Map() {
  const center = useMemo(() => ({ lat: -36.848461, lng: 174.763336 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
      <Marker position={center} />
    </GoogleMap>
  );
}
