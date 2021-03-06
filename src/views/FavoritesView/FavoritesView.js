import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import StarIcon from '@material-ui/icons/Star';
import Button from '../../components/Button/button';
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
  color: var(--main-blue);
`;

const Container = styled.div`
  margin-top: 100px;
  text-align: center;
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
      <>
        <Favorites />
        <Container>
          <Button to="/currencies">BACK TO LIST</Button>
        </Container>
      </>
    )}
  </Wrapper>
);

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(CurrenciesView);
