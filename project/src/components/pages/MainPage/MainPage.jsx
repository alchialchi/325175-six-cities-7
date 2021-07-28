import React from 'react';
import { useSelector } from 'react-redux';

import LocationsList from '../../blocks/locations/LocationsList';
import Header from '../../blocks/header/Header';
import Cities from '../../blocks/cities/Cities';
import Loading from '../../blocks/loading/Loading';
import HiddenSvg from '../../svg/HiddenSvg';

import { getIsOffersDataLoaded, getOffers } from '../../../store/data/selectors';

function MainPage() {
  const offers = useSelector(getOffers);
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--main">
        <Header />
        <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <LocationsList />
          {!isOffersDataLoaded ?
            <Loading />
            : <Cities />}
        </main>
      </div>
    </React.Fragment>
  );
}

export default React.memo(MainPage);
