const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.icon = () => {};

leaflet.map = () => {
  return {
    setView: () => {},
    remove: () => {},
  };
};

leaflet.marker = () => {
  return {
    addTo: () => {},
  };
};

leaflet.tileLayer = () => {
  return {
    addTo: () => {},
  };
};

export default leaflet;
