import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Button
} from 'react-bootstrap';

import store from '../../store';
import { removeMoney } from '../account/actions';
import { unlockManager } from '../../actions/data';

import './index.scss';

class UnlockProduct extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = {
      item
    };

    this.handleUnlockManager = this.handleUnlockManager.bind(this);
  }

  handleUnlockManager() {
    const { dispatch } = store;
    const { item } = this.state;
    const { unlockManagerPrice, id } = item;
    const { money } = this.props;

    if ((money - unlockManagerPrice) < 0) {
      return;
    }

    dispatch(removeMoney(unlockManagerPrice));
    dispatch(unlockManager(id));
  }

  render() {
    const { item } = this.state;
    const {
      money,
      unlockManagerPrice,
      curentPrice,
      isManaged
    } = item;

    const canUnLockVariant = (money - unlockManagerPrice < 0) ? 'secondary' : 'danger';

    return (
      <Row>
        <Col className="mt-3" md={12}>
          <h2 className="text-center text-white">{`${curentPrice.toFixed(0)} $`}</h2>
        </Col>
        {!isManaged
          && (
            <Col className="mt-3" md={12}>
              <Button onClick={this.handleUnlockManager} variant={canUnLockVariant} size="lg" block>
                {`Unlock manager for ($${unlockManagerPrice})`}
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

export default connect(mapToProps)(UnlockProduct);
