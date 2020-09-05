import React, { useState } from "react";
import { Image } from "@chakra-ui/core";
import ReactMapGL, { Marker } from "react-map-gl";
import iconMarker from "../../images/marker.svg";

export default function Mapa({latitud,longitud}) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "845px",
    latitude: latitud,
    longitude: longitud,
    zoom: 17,
  });
  return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoiYWxleGRlbGdhZG8iLCJhIjoiY2tlZG1xYTJwMHUxNjM2bzF6Nm9yYnpyMSJ9.QF8MQeqSlDjk0pZGPleCrg"
        mapStyle="mapbox://styles/alexdelgado/ckedr8xwo078i19n0tp4gvqn9"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          longitude={longitud}
          latitude={latitud}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Image src={iconMarker} alt="icon marker" h="35px" />
        </Marker>
      </ReactMapGL>
  );
}


