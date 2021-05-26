import PropTypes from 'prop-types';

export const propTicker = {
  symbol: PropTypes.string.isRequired,
  symbols: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
