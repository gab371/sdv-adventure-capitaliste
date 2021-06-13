import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

// import Product from '../product';
import Page from '..';
import ProductList from '../../components/product-list';
import UnlockProdcut from '../../components/unlock-product';

const Home = ({ data }) => (
  <Page>
    <Container className="bg-secondary" style={{ height: '100%' }}>
      <Row>
        {data
          .filter((item) => item)
          .map((item) => <ProductList key="test" item={item}><UnlockProdcut key="test" item={item} /></ProductList>)}
      </Row>
    </Container>
  </Page>
);

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);
