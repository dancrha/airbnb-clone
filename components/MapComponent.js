import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapComponent({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  console.log(center);
  return (
    <Map
      mapStyle='mapbox://styles/dc1708/clndpb9kr07s101ma77w6hnn9'
      mapboxAccessToken={process.env.mapbox_key}
      mapLib={import("mapbox-gl")}
      initialViewState={{
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default MapComponent;
