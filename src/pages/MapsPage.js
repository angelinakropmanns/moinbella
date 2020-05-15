import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Firebase'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import ReactLeafletSearch from 'react-leaflet-search'
import styled from 'styled-components/macro'
import Headline from '../components/Headline/Headline'
import AddButton from '../components/AddButton/AddButton'

const dog = new Icon({
  iconUrl: '/maps-marker.png',
  iconSize: [24, 35],
})

const iconSearch = new Icon({
  iconUrl: '/maps-marker-search.png',
  iconSize: [24, 35],
})

export default function MapsPage() {
  const [place, setPlace] = useState([])
  const [activePlace, setActivePlace] = useState(null)

  useEffect(() => {
    const places = db.collection('dogplaces').onSnapshot((snapshot) => {
      const allPlaces = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPlace(allPlaces)
    })
    return () => {
      places()
    }
  }, [])

  return (
    <main>
      <Headline>Hundeplätze</Headline>
      <AddButtonStyled>
        <Link to="/create-place">
          <AddButton>Hundeplatz hinzufügen</AddButton>
        </Link>
      </AddButtonStyled>
      <MapStyled>
        <Map center={[53.55, 9.99]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {place.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.long]}
              icon={dog}
              onClick={() => {
                setActivePlace(place)
              }}
            />
          ))}

          {activePlace && (
            <Popup
              position={[activePlace.lat, activePlace.long]}
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
    </main>
  )
}

const AddButtonStyled = styled.span`
  display: flex;
  justify-content: flex-end;
  margin: 0 4px 4px 0;
`

const MapStyled = styled.section`
  .leaflet-container {
    width: 360px;
    height: 488px;
  }
`
