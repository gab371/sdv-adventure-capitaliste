import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row
} from 'react-bootstrap';

import './index.scss';
import store from '../../store';
import { addMoney } from '../account/actions';

class ProductList extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;
    const { children } = this.props;

    this.state = { item, children };
    this.startManager();
  }

  sellProduct() {
    const { dispatch } = store;
    const { item } = this.state;
    const { curentPrice } = item;

    dispatch(addMoney(curentPrice));
  }

  startManager() {
    const { item } = this.state;
    const { timeFactory, isManaged, unlock } = item;

    if (isManaged && unlock) {
      setInterval(() => {
        this.sellProduct();
      }, timeFactory);
    }
  }

  render() {
    const {
      item,
      children
    } = this.state;
    const {
      image,
      unlock,
      isManaged
    } = item;

    let colorManager = 'bg-lock';
    if (unlock) {
      colorManager = (isManaged) ? 'bg-danger' : 'bg-purple';
    } else {
      colorManager = 'bg-lock';
    }

    return (
      <Col className="mt-5 m-3 mx-auto" md={2}>
        <Row>
          <Row>
            <Col md={12}>
              <img
                src={image}
                className={`shadow p-4 ${colorManager} rounded-circle img-fluid mx-auto d-block`}
                alt="product"
              />
            </Col>
            <Col md={12}>
              {children}
            </Col>
          </Row>
        </Row>
      </Col>
    );
  }
}

const mapToProps = (state) => ({
  money: state.account.money
});

export default connect(mapToProps)(ProductList);
