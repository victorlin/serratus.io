import React from 'react'
import { Helmet } from 'react-helmet'
import { MapPlot } from './MapPlot'
import { SelectionInfo } from './SelectionInfo'
import { RunData } from './types'
import { helpIcon } from 'common'
// @ts-ignore
// import PixiOverlay from 'react-leaflet-pixi-overlay'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export const Geo = () => {
    const defaultPosition: LatLngExpression = [48.864716, 2.349]

    return (
        <MapContainer
            center={defaultPosition}
            zoom={13}
            style={{ height: '600px', width: '600px' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    )
}
