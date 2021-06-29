import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../blocks/offers/OffersList';
import LocationList from '../blocks/locations/LocationsList';
import PlaceOptionsList from '../blocks/places/PlacesList';
import HiddenSvg from '../svg/HiddenSvg';
import Header from '../blocks/header/Header';
import Map from '../blocks/map/Map';
import offersProp from '../blocks/offers/offer.prop';

export default function MainPage(props) {
  const { offers } = props;

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <LocationList />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in Amsterdam
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <PlaceOptionsList />
                </form>
                <OffersList offers={offers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={offers[0].city} offers={offers}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};
