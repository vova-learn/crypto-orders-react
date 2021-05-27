import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTicker, getTickers} from '../../store/selectors';
import {ActionCreator} from '../../store/actions';
import Ticker from '../ticker/ticker';
import {propTicker} from '../../props-validation';
import PriceTicker from '../price-ticker/price-ticker';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Header = ({ticker, tickers, isOrderbook, isTrades, onChangeTicker}) => {
  return (
    <header className="header container">
      <nav className="header__navigation">
        <div className="trading">
          <Ticker ticker={ticker} tickers={tickers} onChangeTicker={onChangeTicker}/>

          <PriceTicker ticker={ticker} />

        </div>
        <ul className="site-navigation">
          <li className="site-navigation__item">
            <Link to={AppRoute.ORDERBOOK} className={`site-navigation__link ${isOrderbook && `site-navigation__link--active`}`}>
                Биржевой стакан
            </Link>
          </li>
          <li className="site-navigation__item">
            <Link to={AppRoute.TRADES} className={`site-navigation__link ${isTrades && `site-navigation__link--active`}`}>
                Сделки
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  isOrderbook: false,
  isTrades: false,
};

Header.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  tickers: PropTypes.arrayOf(
      PropTypes.shape(propTicker).isRequired
  ).isRequired,
  isOrderbook: PropTypes.bool,
  isTrades: PropTypes.bool,
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
