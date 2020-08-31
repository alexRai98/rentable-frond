import React, { useState } from "react";
import { Image, AspectRatioBox } from "@chakra-ui/core";
import ReactMapGL, { Marker } from "react-map-gl";
import iconMarker from "../../images/marker.svg";

export default function Mapa() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: -5.19527,
    longitude: -80.626938,
    zoom: 8,
  });


  return (
    <AspectRatioBox ratio={16 / 9}>
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
          <Image src={iconMarker} alt="icon marker" h="45px" />
        </Marker>
      </ReactMapGL>
    </AspectRatioBox>
  );
}
