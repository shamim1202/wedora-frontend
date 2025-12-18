import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Major cities in Bangladesh
const coverageAreas = [
  { name: "Dhaka", position: [23.8103, 90.4125] },
  { name: "Chattogram", position: [22.3569, 91.7832] },
  { name: "Sylhet", position: [24.8949, 91.8687] },
  { name: "Rajshahi", position: [24.3745, 88.6042] },
  { name: "Khulna", position: [22.8456, 89.5403] },
  { name: "Barishal", position: [22.701, 90.3535] },
  { name: "Rangpur", position: [25.7439, 89.2752] },
  { name: "Mymensingh", position: [24.7471, 90.4203] },
];

const ServiceCoverageMap = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-secondary mb-4">
          Our <span className="text-primary font-bold">Service Coverage</span>
        </h2>
        <p className="max-w-2xl mx-auto text-accent text-sm md:text-base">
          We proudly offer our decoration and wedding event services across
          major cities throughout Bangladesh.
        </p>
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-xl border"
      >
        <MapContainer
          center={[23.685, 90.3563]} // Bangladesh center
          zoom={7}
          scrollWheelZoom={false}
          className="h-[400px] md:h-[500px] w-full z-10"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coverageAreas.map((area) => (
            <Marker key={area.name} position={area.position}>
              <Popup>
                <div className="text-center">
                  <h4 className="font-semibold text-secondary">{area.name}</h4>
                  <p className="text-xs text-gray-600">
                    Wedding & Event Decoration Services Available
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </section>
  );
};

export default ServiceCoverageMap;
