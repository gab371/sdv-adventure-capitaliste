import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Button
} from 'react-bootstrap';

import store from '../../store';
import { removeMoney } from '../account/actions';
import { unlockProduct } from '../../actions/data';

import './index.scss';

class Product extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = { item };

    this.handleUnlockProduct = this.handleUnlockProduct.bind(this);
  }

  handleUnlockProduct() {
    const { dispatch } = store;
    const { item } = this.state;
    const { unlockPricing, id } = item;
    const { money } = this.props;

    if ((money - unlockPricing) < 0) {
      return;
    }

    dispatch(removeMoney(unlockPricing));
    dispatch(unlockProduct(id));
  }

  render() {
    const { item } = this.state;
    const {
      money,
      unlockPricing,
      curentPrice,
      unlock
    } = item;

    const canUnLockVariant = (money - unlockPricing < 0) ? 'secondary' : 'danger';

    return (
      <Row>
        <Col className="mt-3" md={12}>
          <h2 className="text-center text-white">{`${curentPrice.toFixed(0)} $`}</h2>
        </Col>
        {!unlock
          && (
            <Col className="mt-3" md={12}>
              <Button onClick={this.handleUnlockProduct} variant={canUnLockVariant} size="lg" block>
                {`Unlock for ($${unlockPricing})`}
              </Button>
            </Col>
          )}
      </Row>
    );
  }
}

const mapToProps = (state) => ({
  money: state.account.money
});

export default connect(mapToProps)(Product);
