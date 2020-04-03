import haversine from 'haversine';

const MAX_NEAREST_OFFERS = 3;

const getDistList = (offer, offers) => {
  const start = {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  };
  const clearOffers = offers.filter((it) => it.id !== offer.id);

  return clearOffers.map(({id, location: {latitude, longitude}}) => ({
    id,
    dist: haversine(start, {latitude, longitude}),
  }));
};

const getNearestIds = (distList) => [...distList]
    .sort((a, b) => a.dist - b.dist)
    .slice(0, MAX_NEAREST_OFFERS)
    .map(({id}) => id);


const getNearestOffers = (offer, offers) => {
  const distList = getDistList(offer, offers);
  const nearestIds = getNearestIds(distList);

  return offers.filter(({id}) => nearestIds.includes(id));
};

export {getNearestOffers, MAX_NEAREST_OFFERS};
