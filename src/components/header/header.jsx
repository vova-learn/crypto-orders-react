import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTicker, getTickers} from '../../store/selectors';
import {ActionCreator} from '../../store/actions';
import Ticker from '../ticker/ticker';
import {propTicker} from '../../props-validation';
import PriceTicker from '../price-ticker/price-ticker';

const Header = ({ticker, tickers, onChangeTicker}) => {

  return (
    <header className="header container">
      <nav className="header__navigation">
        <div className="trading">
          <Ticker ticker={ticker} tickers={tickers} onChangeTicker={onChangeTicker}/>

          <PriceTicker ticker={ticker} />

        </div>
        <ul className="site-navigation">
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link site-navigation__link--active">
                Биржевой стакан
            </a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">
                Сделки
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  tickers: PropTypes.arrayOf(
      PropTypes.shape(propTicker).isRequired
  ).isRequired,
  onChangeTicker: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ticker: getTicker(state),
    tickers: getTickers(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTicker: (ticker) => {
      dispatch(ActionCreator.changeTicker(ticker));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
