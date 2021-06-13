import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

// import Product from '../product';
import Account from '../barre-price';
import ProductList from '../product-list';
import SellProduct from '../sell-product';
import ManagersList from '../managers-list';

const Home = ({ data }) => (
  <Container className="bg-dark" style={{ height: '100%' }}>
    <Account />
    <ManagersList />
    <Row>
      <Col className="mt-5 m-3 mx-auto" md={3}>
        {data
          .filter((item) => item.unlock)
          .map((item) => <ProductList key="test" item={item} />)}
        {data
          .filter((item) => item.unlock)
          .map((item) => <SellProduct key="test" item={item} />)}
      </Col>
    </Row>
  </Container>
);

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);
