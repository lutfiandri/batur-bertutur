import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TbMapPin } from 'react-icons/tb';

const position = [51.505, -0.09];

function Map() {
  const mapPinActiveIcon = new L.Icon({
    iconUrl: '/maps/tabler-icon-map-pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
  });

  const mapPinIcon = new L.Icon({
    iconUrl: '/maps/tabler-icon-map-pin-filled.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });

  return (
    <div className="isolate z-0 min-h-screen-no-header">
      <MapContainer
        className="min-h-screen-no-header"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position} icon={mapPinActiveIcon}> */}
        <Marker position={position} icon={mapPinIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          {/* <TbMapPin size={30}></TbMapPin> */}
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
