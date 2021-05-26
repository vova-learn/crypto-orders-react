import React from 'react';
import PropTypes from 'prop-types';
import {propTicker} from '../../props-validation';

const Ticker = ({ticker, tickers, onChangeTicker}) => {
  const handleTickerButtonClick = ({currentTarget}) => {
    const activeTicker = tickers.find(({symbol}) => symbol === currentTarget.name);
    onChangeTicker(activeTicker);
  };

  const getTickerButtonJsx = (symbol) => {
    const isActiveTicker = symbol === ticker.symbol ? true : false;

    return (
      <button
        key={symbol}
        className="pair__item"
        disabled={isActiveTicker}
        title={symbol}
        name={symbol}
        onClick={handleTickerButtonClick}
      >
        {symbol}
      </button>
    );
  };

  return (
    <div className="trading__pair pair">
      <h2 className="pair__title">{ticker.symbol}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="pair__arrow"><path d="M15.5 10.29v1.75L12 15.75l-3.5-3.71v-1.75h7z" fill="#76808F" /></svg>
      <div className="pair__menu">

        {tickers.map(({symbol}) => (
          getTickerButtonJsx(symbol)
        ))}

      </div>
    </div>
  );
};

Ticker.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  tickers: PropTypes.arrayOf(
      PropTypes.shape(propTicker).isRequired
  ).isRequired,
  onChangeTicker: PropTypes.func.isRequired,
};

export default Ticker;
