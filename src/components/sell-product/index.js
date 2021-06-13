import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Button
} from 'react-bootstrap';

import store from '../../store';
import { addMoney } from '../account/actions';

import './index.scss';

class SellProduct extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = { item };

    this.handleSellProduct = this.handleSellProduct.bind(this);
  }

  handleSellProduct() {
    this.sellProduct();
  }

  sellProduct() {
    const { dispatch } = store;
    const { item } = this.state;
    const { curentPrice } = item;

    dispatch(addMoney(curentPrice));
  }

  render() {
    const { item } = this.state;
    const { curentPrice } = item;

    return (
      <Row>
        <Col className="mt-3" md={12}>
          <Button onClick={this.handleSellProduct} variant="success" size="lg" block>
            {`Sell for ($${curentPrice.toFixed(0)})`}
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapToProps = (state) => ({
  money: state.account.money
});

export default connect(mapToProps)(SellProduct);
