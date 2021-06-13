import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Button
} from 'react-bootstrap';

import store from '../../store';
import { removeMoney } from '../account/actions';
import { upgradeProduct } from '../../actions/data';

import './index.scss';

class UpgradeProduct extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = { item };

    this.handleUpgradeProduct = this.handleUpgradeProduct.bind(this);
  }

  handleUpgradeProduct() {
    const { dispatch } = store;
    const { item } = this.state;
    const { totalCostFactoryUnit, id } = item;
    const { money } = this.props;

    if (money - totalCostFactoryUnit < 0) {
      return;
    }

    dispatch(removeMoney(totalCostFactoryUnit));

    dispatch(upgradeProduct(id));

    this.setState({ item });
  }

  render() {
    const {
      item
    } = this.state;
    const {
      totalCostFactoryUnit,
      money,
      curentPrice,
      multi
    } = item;

    const expo = (x, f) => {
      if (x > 100000) {
        return Number.parseFloat(x).toExponential(f);
      }
      return x;
    };

    const canUpgradeVariant = (money - totalCostFactoryUnit < 0) ? 'secondary' : 'success';

    return (
      <Row>
        <Col className="mt-3" md={12}>
          <h2 className="text-center text-white">{`${curentPrice.toFixed(0)} $`}</h2>
        </Col>
        <Col className="mt-3" md={12}>
          <Button variant={canUpgradeVariant} onClick={this.handleUpgradeProduct} size="lg" block>
            <h1 className="display-6">{`X${multi} : $${expo(totalCostFactoryUnit.toFixed(2), 3)}`}</h1>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapToProps = (state) => ({
  money: state.account.money
});

export default connect(mapToProps)(UpgradeProduct);
