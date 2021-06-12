import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../blocks/offers/offer-card';
import LocationList from '../blocks/locations/locations-list';
import PlaceOptionsList from '../blocks/places/places-list';
import HiddenSvg from '../svg/hidden-svg';
import Header from '../blocks/header/header';

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
                <div className="cities__places-list places__list tabs__content">
                  {offers.map((offer) => (
                    <OfferCard key={offer.id} />
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
};
