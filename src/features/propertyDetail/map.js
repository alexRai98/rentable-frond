import React, { useState } from "react";
import { Image } from "@chakra-ui/core";
import ReactMapGL, { Marker } from "react-map-gl";
import iconMarker from "../../images/marker.svg";

export default function Mapa() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "845px",
    latitude: -5.19527,
    longitude: -80.626938,
    zoom: 15,
  });


  return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoiYWxleGRlbGdhZG8iLCJhIjoiY2tlZG1xYTJwMHUxNjM2bzF6Nm9yYnpyMSJ9.QF8MQeqSlDjk0pZGPleCrg"
        mapStyle="mapbox://styles/alexdelgado/ckedr8xwo078i19n0tp4gvqn9"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          longitude={-80.626938}
          latitude={-5.19527}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Image src={iconMarker} alt="icon marker" h="35px" />
        </Marker>
      </ReactMapGL>
  );
}
