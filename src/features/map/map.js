import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/core";

export default function Mapa() {
  const position = [-5.19527, -80.626938];
  return (
    <Box id="mapid" height="800px" w="400px">
      <Map center={position} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      </Map>
    </Box>
  );
}
