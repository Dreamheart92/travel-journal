import { GoogleMap } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

export default function Map({ center }) {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    />
  );
}
