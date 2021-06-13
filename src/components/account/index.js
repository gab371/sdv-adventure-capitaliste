import React from 'react';
import { connect } from 'react-redux';
import { Row, Navbar } from 'react-bootstrap';

const Account = ({ money }) => (
  <Row>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>
        <p className="display-10 text-success mb-0">{`$ ${money.toFixed(2)}`}</p>
      </Navbar.Brand>
    </Navbar>
  </Row>
);

const mapToProps = (state) => ({
  money: state.account.money
});

export default connect(mapToProps)(Account);
