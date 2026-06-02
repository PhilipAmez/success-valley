import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapComponent.css'

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
})

export default function MapComponent() {
  const position = [5.6213, -0.1841]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl h-[420px] map-container">
      <MapContainer center={position} zoom={16} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <p className="font-bold text-sm">Success Valley Farms</p>
              <p className="text-xs text-gray-600">West Legon, Accra, Ghana</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
