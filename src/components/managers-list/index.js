import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

const Manager = ({ name }) => (
  <Col className="mr-2" md={2}>
    <Row>
      <Col md={12}>
        <img
          src="https://image.flaticon.com/icons/png/512/2552/2552801.png"
          className="shadow p-1 bg-danger rounded-circle img-fluid"
          alt={name}
        />
      </Col>
      <Col md={12} className="mt-2 text-center text-light">
        <h5>{`${name}`}</h5>
      </Col>
    </Row>
  </Col>
);

const ManagersList = ({ data }) => {
  const filterManager = data.filter((product) => product.isManaged);

  return (
    <Container>
      <h4 className="text-light">{`Manager List : (${filterManager.length}/${data.length})`}</h4>
      <Row className="mt-3 mb-5">
        {filterManager.map((product) => <Manager name={product.name} />)}
      </Row>
    </Container>
  );
};

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(ManagersList);
