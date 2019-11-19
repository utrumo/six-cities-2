import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import {ASSETS_PATCH} from '../../shared/const';

class Map extends PureComponent {
  componentDidMount() {
    const {view, markers} = this.props;

    this._setView(view);
    this._setMarkers(markers);
  }

  componentWillUnmount() {
    this._removeMap();
  }

  get _map() {
    if (!this._mapCache) {
      this._mapCache = Map._getMap();
    }
    return this._mapCache;
  }

  _removeMap() {
    this._mapCache.remove();
    this._mapCache = null;
  }

  _setView({latitude, longitude, zoom}) {
    this._map.setView([latitude, longitude], zoom);
  }

  _setMarker(latitude, longitude, isActive) {
    leaflet
      .marker([latitude, longitude], {icon: Map._getIcon(isActive)})
      .addTo(this._map);
  }

  _setMarkers(markers) {
    markers.forEach(({latitude, longitude}) => {
      this._setMarker(latitude, longitude);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
  }

  static _getIcon(isActive = false) {
    return leaflet.icon({
      iconUrl: `${ASSETS_PATCH}img/pin${isActive ? `-active` : ``}.svg`,
      iconSize: [30, 30]
    });
  }

  static _setLayer(map) {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
          contributors &copy;
          <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
  }

  static _getMap() {
    const map = leaflet.map(`map`, {zoomControl: false});
    Map._setLayer(map);
    return map;
  }
}

Map.propTypes = {
  view: PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  markers: PropTypes.arrayOf(PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};

export default Map;
