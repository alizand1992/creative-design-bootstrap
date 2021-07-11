import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';

const Service = ({ name, children }) => {
  const src = `/${name}.png`;

  return (
    <React.Fragment>
      <Row>
        <Col style={{ textAlign: 'center' }}>
          {name.toUpperCase()}
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={12} className="text-center">
          <Image src={src} className="service-image" alt={`${name} service`} />
        </Col>
        <Col lg={9} md={12}>
          {children}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Service;
