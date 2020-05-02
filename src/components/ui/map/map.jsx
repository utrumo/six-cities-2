import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import {ImagePath} from 'shared/const';

const MAP_OPTIONS = {
  zoomControl: false,
};

const TileOptions = {
  URL_TEMPLATE: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  OPTIONS: {
    attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy;
        <a href="https://carto.com/attributions">CARTO</a>`,
  },
};

const Container = {
  ID: `map`,
  STYLE: {height: `100%`},
};

const Icon = {
  NORMAL: leaflet.icon({
    iconUrl: ImagePath.MAP_PIN,
    iconSize: [30, 30],
  }),
  ACTIVE: leaflet.icon({
    iconUrl: ImagePath.MAP_ACTIVE_PIN,
    iconSize: [30, 30],
  }),
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._addedMarkers = [];
  }

  componentDidMount() {
    const {view, markers, activeCardId} = this.props;

    this._setView(view);
    this._addMarkers(markers, activeCardId);
  }

  componentDidUpdate(prevProps) {
    const {activeCardId: prevActiveCardId} = prevProps;
    const {view, markers, activeCardId} = this.props;

    this._setView(view);
    this._removeUnneededMarkers(markers);
    this._updateIcons(prevActiveCardId, activeCardId);
    this._addNewMarkers(markers, activeCardId);
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

  _addMarker(latitude, longitude, isActive) {
    const icon = isActive ? Icon.ACTIVE : Icon.NORMAL;
    return leaflet
      .marker([latitude, longitude], {icon})
      .addTo(this._map);
  }

  _addMarkers(markers, activeCardId) {
    markers.forEach(({id, latitude, longitude}) => {
      const isActive = id === activeCardId;

      this._addedMarkers.push({
        id,
        instance: this._addMarker(latitude, longitude, isActive),
      });
    });
  }

  _addNewMarkers(newMarkerList, activeCardId) {
    const newMarkers = newMarkerList.filter((marker) => {
      const isAdded = this._addedMarkers.some((it) => it.id === marker.id);

      return !isAdded;
    });

    this._addMarkers(newMarkers, activeCardId);
  }

  _removeUnneededMarkers(newMarkerList) {
    let hasRemoved = false;
    const addedMarkers = this._addedMarkers.filter((marker) => {
      const isExist = newMarkerList.some((it) => it.id === marker.id);

      if (!isExist) {
        marker.instance.remove();
        hasRemoved = true;
      }

      return isExist;
    });

    if (hasRemoved) {
      this._addedMarkers = addedMarkers;
    }
  }

  _setIcon(markerId, icon) {
    if (!markerId) {
      return;
    }

    const marker = this._addedMarkers.find(({id}) => id === markerId);

    if (!marker) {
      return;
    }

    marker.instance.setIcon(icon);
  }

  _updateIcons(prevActiveCardId, activeCardId) {
    if (activeCardId !== prevActiveCardId) {
      this._setIcon(prevActiveCardId, Icon.NORMAL);
      this._setIcon(activeCardId, Icon.ACTIVE);
    }
  }

  render() {
    return <div id={Container.ID} style={Container.STYLE} />;
  }

  static _setLayer(map) {
    const {URL_TEMPLATE, OPTIONS} = TileOptions;
    leaflet
      .tileLayer(URL_TEMPLATE, OPTIONS)
      .addTo(map);
  }

  static _getMap() {
    const map = leaflet.map(Container.ID, MAP_OPTIONS);
    Map._setLayer(map);
    return map;
  }
}

Map.propTypes = {
  view: PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  markers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })).isRequired,
  activeCardId: PropTypes.number,
};

export default Map;
