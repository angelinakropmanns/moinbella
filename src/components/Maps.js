import React, { useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
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
  const [activePlace, setActivePlace] = useState(null)

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
              onClick={() => {
                setActivePlace(place)
              }}
            />
          ))}

          {activePlace && (
            <Popup
              position={[
                activePlace.coordinates[0],
                activePlace.coordinates[1],
              ]}
              onClose={() => !setActivePlace()}
            >
              <div>
                <h3>{activePlace.name}</h3>
                <p>
                  Größe: {activePlace.size}qm <br />
                  Einzäunung: {activePlace.safety} <br />
                  Bodenbeschaffenheit: {activePlace.ground} <br />
                  Erreichbarkeit mit öffentlichen Verkehrsmitteln:{' '}
                  {activePlace.public_transport}
                </p>
              </div>
            </Popup>
          )}
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
  .leaflet-container {
    width: 360px;
    height: 520px;
  }
`
