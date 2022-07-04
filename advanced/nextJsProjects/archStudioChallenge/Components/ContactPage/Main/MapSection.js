import React from "react";
import MapStyles from "../../../styles/Contact/MapSection.module.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// mapboxgl.accessToken = `${process.env.MAPBOX_API}`;

// const Map = ReactMapboxGl({
//   accessToken: process.env.MAPBOX_API,
// });

function MapSection({ children, ...props }) {
  console.log(process.env.NEXT_PUBLIC_MAPBOX_API);
  const [pageIsMounted, setPageIsMounted] = React.useState(false);
  React.useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "our-map",
      style: "mapbox://styles/mapbox/streets-v11",
      accessToken: `${process.env.NEXT_PUBLIC_MAPBOX_API}`,
      // lng,lat
      center: [-91.831833, 35.20105],
      zoom: 4,
      projection: "globe",
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-86.686206, 36.2062843])
      .addTo(map);
    const marker2 = new mapboxgl.Marker()
      .setLngLat([-96.8493325, 32.8300299])
      .addTo(map);
  });
  return <div className={MapStyles[`map`]} id="our-map"></div>;
}

export default MapSection;
