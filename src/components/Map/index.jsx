import { GoogleMap, MarkerF } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

export default function Map({ center }) {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={5}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
