import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRouter } from 'next/router';

const centerOfMap = [-7.187866691703859, 109.85528404503381];

function Map({ wisatas = [], activeWisata }) {
  const router = useRouter();

  const mapPinActiveIcon = new L.Icon({
    iconUrl: '/maps/tabler-icon-map-pin-filled.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

  const mapPinIcon = new L.Icon({
    iconUrl: '/maps/tabler-icon-map-pin-outlined.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });

  const parseLocation = (latLongString) => {
    try {
      return latLongString
        .split(',')
        .map((l) => l.trim())
        .map((l) => Number(l));
    } catch (error) {
      return [0, 0];
    }
  };

  return (
    <div className="isolate z-0 min-h-screen-no-header">
      <MapContainer
        className="min-h-screen-no-header"
        center={centerOfMap}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {wisatas.map((wisata) => (
          <Marker
            key={wisata?.meta?.slug}
            position={parseLocation(wisata?.meta?.location)}
            icon={
              activeWisata?.meta?.slug === wisata?.meta?.slug
                ? mapPinActiveIcon
                : mapPinIcon
            }
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
              mouseout: (event) => event.target.closePopup(),
              click: () => router.push(`/peta?w=${wisata?.meta?.slug}`),
            }}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
