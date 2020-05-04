import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import mapsData from '../maps.json'
import styled from 'styled-components/macro'

const dog = new Icon({
  iconUrl: '/marker-maps.png',
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
