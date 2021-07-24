import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Map from '../map/Map';
import OffersList from '../offers/OffersList';
import SortList from '../sort/SortList';
import NoCities from '../cities/NoCities';
import { CARD_TYPES, CITIES } from '../../../const';
import { sortOffers } from '../../../utils';
import { getActiveOffer, getSortType, getCity } from '../../../store/work-process/selectors';
import { getOffers } from '../../../store/data/selectors';

export default function Cities() {
  const city = useSelector(getCity);
  const allOffers = useSelector(getOffers);
  const activeOffer = useSelector(getActiveOffer);
  const sortType = useSelector(getSortType).name;

  const offers = useMemo(() => sortOffers(allOffers, sortType, city), [allOffers, sortType, city]);

  if (!offers.length) {
    return <NoCities city={city} />;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {city}
          </b>
          <SortList />
          <OffersList offers={offers} activeOffer={activeOffer} type={CARD_TYPES.CITIES} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={CITIES[city.toUpperCase()]} activeOffer={activeOffer} offers={offers}/>
          </section>
        </div>
      </div>
    </div>
  );
}
