import Map from "react-map-gl";

function MapComponent() {
  return (
    <Map
      mapStyle='mapbox://styles/dc1708/clndpb9kr07s101ma77w6hnn9'
      mapboxAccessToken={process.env.mapbox_key}
      mapLib={import("mapbox-gl")}
      initialViewState={{
        latitude: 79.3832,
        longitude: 43.6532,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default MapComponent;
