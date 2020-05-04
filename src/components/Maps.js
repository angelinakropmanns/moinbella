import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import ReactLeafletSearch from 'react-leaflet-search'
import mapsData from '../maps.json'
import styled from 'styled-components/macro'

const dog = new Icon({
  iconUrl: '/maps-marker.png',
  iconSize: [24, 35],
})

const iconSearch = new Icon({
  iconUrl: '/maps-marker-search.png',
  iconSize: [24, 35],
})

export default function Maps() {
  return (
    <>
      <MapStyled>
        <Map center={[53.55, 9.99]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {mapsData.map((place) => (
            <Marker
              key={place.id}
              position={[place.coordinates[0], place.coordinates[1]]}
              icon={dog}
            />
          ))}
          <ReactLeafletSearch
            position="topright"
            markerIcon={iconSearch}
            inputPlaceholder="Gib einen Ort ein"
            zoom={12}
            showPopup={false}
          />
        </Map>
      </MapStyled>
    </>
  )
}

const MapStyled = styled.section`
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  .leaflet-container {
    width: 360px;
    height: 530px;
  }
`
