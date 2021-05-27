import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {propTicker} from '../../props-validation';
import useWSTrade from '../../hooks/use-ws-trade';
import {TickerPrice} from '../../const';

let prevPrice;
const PriceTicker = ({ticker}) => {
  const {
    tickerPrice,
    setTickerPrice,
    isWSTradeLoad,
    connectWSTrade,
    disconnectWSTrade,
  } = useWSTrade();


  useEffect(() => {
    if (!isWSTradeLoad) {
      connectWSTrade(ticker);
    } else if (isWSTradeLoad) {
      disconnectWSTrade();
      prevPrice = undefined;
      setTickerPrice(TickerPrice.DEFAULT);
      connectWSTrade(ticker);
    }
  }, [ticker]);

  prevPrice = tickerPrice === TickerPrice.DEFAULT ? TickerPrice.DEFAULT : prevPrice;
  const isBuy = tickerPrice > prevPrice ? `trading__ticker--green` : ``;
  const isSale = tickerPrice < prevPrice ? `trading__ticker--red` : ``;
  prevPrice = tickerPrice;

  return (
    <div className={`trading__ticker ticker ${isBuy || isSale}`}>
      <p className="ticker__title">{tickerPrice}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ticker__arrow-icon"><path d="M5 13.47l1.41-1.41 5.1 5.1V3h1.99v14.15l5.09-5.09L20 13.47l-7.5 7.5-7.5-7.5z" fill="currentColor" /></svg>
    </div>
  );
};

PriceTicker.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
};

export default PriceTicker;
