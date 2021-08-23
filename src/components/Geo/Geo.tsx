import React from 'react'
import { Helmet } from 'react-helmet'
import { MapPlot } from './MapPlot'
import { SelectionInfo } from './SelectionInfo'
import { RunData } from './types'
import { helpIcon } from 'common'
// @ts-ignore
import PixiOverlay from 'react-leaflet-pixi-overlay'
// @ts-ignore
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const Geo = () => {
    const markers = [
        {
            id: 'randomStringOrNumber',
            iconColor: 'red',
            position: [-37.814, 144.96332],
            // popup: renderToString(
            //   <div>All good!</div>
            // ),
            onClick: () => alert('marker clicked'),
            tooltip: 'Hey!',
        },
        {
            id: '2',
            iconColor: 'blue',
            position: [-37.814, 144.96332],
            popup: 'Quack!',
            popupOpen: true, // if popup has to be open by default
            onClick: () => alert('marker clicked'),
            tooltip: 'Nice!',
        },
    ]

    return (
        <Map center={[-37.814, 144.96332]} zoom={13} style={{ height: '600px', width: '600px' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <PixiOverlay markers={markers} />
        </Map>
    )
}
