import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

// import Product from '../product';
import Page from '..';
import ProductList from '../../components/product-list';
import UnlockManager from '../../components/unlock-manager';

const Home = ({ data }) => (
  <Page>
    <Container className="bg-secondary" style={{ height: '100%' }}>
      <Row>
        {data
          .filter((item) => item.unlock)
          .map((item) => <ProductList item={item}><UnlockManager item={item} /></ProductList>)}
      </Row>
    </Container>
  </Page>
);

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);
