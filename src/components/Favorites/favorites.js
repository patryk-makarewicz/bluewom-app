import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import FavoriteItem from './components/favoriteItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
`;

const Favorites = ({ favCart }) => {
  return (
    <Wrapper>
      {favCart.map((favCurrency) => (
        <FavoriteItem key={favCurrency.code} favCurrency={favCurrency} />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(Favorites);
