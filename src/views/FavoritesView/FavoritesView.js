import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import StarIcon from '@material-ui/icons/Star';
import Frame from '../../components/Frame/frame';
import Favorites from '../../components/Favorites/favorites';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  min-height: 65vh;
`;

const FrameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Paragraph = styled.p`
  padding: 0 10px 40px 10px;
  text-align: center;
  font-size: 24px;
  text-shadow: 0px 1px 1px var(--gray-dark);
  color: var(--gray);
`;

const CurrenciesView = ({ favCart }) => (
  <Wrapper>
    <Paragraph>
      Your favorites currencies
      <Badge badgeContent={favCart.length} color="secondary" showZero style={{ zIndex: '-1000' }}>
        <StarIcon
          style={{ fontSize: 40, color: '#fbc02d', marginBottom: '5px', zIndex: '-1000' }}
        />
      </Badge>
    </Paragraph>
    {favCart.length === 0 ? (
      <FrameWrapper>
        <Frame
          text="You don't have any currency added to favorites."
          label="BACK TO LIST"
          to="/currencies"
        />
      </FrameWrapper>
    ) : (
      <Favorites />
    )}
  </Wrapper>
);

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(CurrenciesView);
