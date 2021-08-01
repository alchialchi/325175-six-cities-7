import React from 'react';
import { useSelector } from 'react-redux';

import LocationsList from '../../blocks/locations-list/locations-list';
import Header from '../../blocks/header/header';
import Cities from '../../blocks/cities/cities';
import Loading from '../../blocks/loading/loading';
import HiddenSvg from '../../svg/hidden-svg';
import Toast from '../../blocks/toast/toast';

import { getIsOffersDataLoaded, getOffers, getIsDataError } from '../../../store/data/selectors';
import { getIsOffline } from '../../../store/user/selectors';
import { AlertMessage } from '../../../const';

function MainPage() {
  const offers = useSelector(getOffers);
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);
  const isOffline = useSelector(getIsOffline);
  const isDataError = useSelector(getIsDataError);

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--main">
        <Header />
        {isOffline && <Toast message={AlertMessage.OFFLINE} />}
        {isDataError && <Toast message={AlertMessage.LOADING} />}
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
