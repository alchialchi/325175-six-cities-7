import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Map from '../map/map';
import OffersList from '../offers/offers-list';
import SortList from '../sort/sort-list';
import NoCities from './no-cities';
import { CARD_TYPES, CITIES } from '../../../const';
import { sortOffers } from '../../../utils';
import { getActiveOffer, getSortType, getCity } from '../../../store/work-process/selectors';
import { getOffers } from '../../../store/data/selectors';
import { setActiveOfferId } from '../../../store/action';

export default function Cities() {
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const allOffers = useSelector(getOffers);
  const activeOffer = useSelector(getActiveOffer);
  const sortType = useSelector(getSortType).name;

  const offers = useMemo(() => sortOffers(allOffers, sortType, city), [allOffers, sortType, city]);
  const onMouseAction = (id) => {
    dispatch(setActiveOfferId(id));
  };

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
          <OffersList
            offers={offers}
            activeOffer={activeOffer}
            type={CARD_TYPES.CITIES}
            onMouseEnter={onMouseAction}
            onMouseLeave={onMouseAction}
          />
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