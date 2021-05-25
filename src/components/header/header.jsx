import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPair} from '../../store/selectors';
import {Pair} from '../../const';
import {ActionCreator} from '../../store/actions';

const Header = ({pair, onChangePair}) => {
  const pairs = Object.values(Pair);

  const handlePairNameClick = ({currentTarget}) => {
    onChangePair(Pair[currentTarget.name]);
  };

  const getPairButtonJsx = (pairName, activePair) => {
    const isActivePair = pairName === activePair.name ? true : false;
    pairName = pairName.toUpperCase();

    return (
      <button
        className="pair__item"
        disabled={isActivePair}
        title={pairName}
        name={pairName}
        onClick={handlePairNameClick}
      >
        {pairName}
      </button>
    );
  };

  return (
    <header className="header container">
      <nav className="header__navigation">
        <div className="trading">
          <div className="trading__pair pair">
            <h2 className="pair__title">{pair.name.toUpperCase()}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="pair__arrow"><path d="M15.5 10.29v1.75L12 15.75l-3.5-3.71v-1.75h7z" fill="#76808F" /></svg>
            <div className="pair__menu">

              {pairs.map((item) => (
                getPairButtonJsx(item.name, pair)
              ))}

            </div>
          </div>
          <div className="trading__ticker ticker trading__ticker--red">
            <p className="ticker__title">---</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ticker__arrow-icon"><path d="M5 13.47l1.41-1.41 5.1 5.1V3h1.99v14.15l5.09-5.09L20 13.47l-7.5 7.5-7.5-7.5z" fill="currentColor" /></svg>
          </div>
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
  pair: PropTypes.string.isRequired,
  onChangePair: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    pair: getPair(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePair: (pair) => {
      dispatch(ActionCreator.changePair(pair));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
